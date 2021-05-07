import firebase from "firebase";

interface loginUserProps {
  email: string;
  password: string;
}

export const authenticateUser = ({ email, password }: loginUserProps) => {
  return new Promise(async (resolve, reject) => {
    const dbRef = firebase.database().ref();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const userId: string = response.user?.uid || "";

        dbRef
          .child("users")
          .child(userId)
          .get()
          .then((snapshot) => {
            const databaseResponse = snapshot.val();
            const customResponse = {
              name: databaseResponse.name,
              credential: response.credential,
              uid: userId,
              email: response.user?.email,
            };
            resolve(customResponse);
          })
          .catch((error) => reject(error));
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
        firebase
          .database()
          .ref(`users/${userCredential.user?.uid}`)
          .set({ name, email })
          .catch((error) => reject(error));
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signoutUser = () => firebase.auth().signOut();
