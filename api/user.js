import auth from '@react-native-firebase/auth';
import {updateToken} from '../redux/reducers/User';
import store from '../redux/store';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user, 'USER************');
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid.'};
    } else {
      return {error: 'Something went wrong. Please try again.'};
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    console.log(error, 'ERROR************');
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Incorrect password.'};
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'No record of this user. Please register first.',
      };
    }
    return {status: false, error: 'Something went wrong. '};
  }
};

export const logOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
