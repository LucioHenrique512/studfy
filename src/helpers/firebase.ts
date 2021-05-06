import firebase from "firebase";

interface loginUserProps {
  email: string;
  password: string;
}

export const authenticateUser = ({ email, password }: loginUserProps) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

interface createUserProps {
  name: string;
  email: string;
  password: string;
}
export const createUser = ({ email, password, name }: createUserProps) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
