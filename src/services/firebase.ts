import { GoogleSignin } from "@react-native-google-signin/google-signin";
import database from "@react-native-firebase/database";

const statusCodes = {
  SIGN_IN_CANCELLED: "SIGN_IN_CANCELLED",
  IN_PROGRESS: "IN_PROGRESS",
  PLAY_SERVICES_NOT_AVAILABLE: "PLAY_SERVICES_NOT_AVAILABLE",
};

export const DATABASE_REFS = {
  USERS: "/users",
  SUBJECTS: "/subjects",
  ACTIVITIES: "/activities",
};

export const initGoogleSignin = () => {
  console.log("Firebase:init google signin");
  GoogleSignin.configure({
    scopes: ["profile", "email"], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "70291854702-aao3av68dum4sbla4vvohsgscn8pagv7.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "", // specifies a hosted domain restriction
    loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    iosClientId:
      "70291854702-rf8trt220ri6u5mavtkjq0qj3jg9c63p.apps.googleusercontent.com", // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: "", // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  });
};

export const userDatabase = database().ref(DATABASE_REFS.USERS);

export const signIn = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      const userPayload = userInfo.user;

      database()
        .ref(`${DATABASE_REFS.USERS}/${userPayload.id}`)
        .set({ ...userPayload, lastLogin: new Date().toISOString() })
        .then(() => {
          resolve(userInfo);
        })
        .catch(reject);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          reject({ message: "Login cancelado pelo usuário" });
          break;
        case statusCodes.IN_PROGRESS:
          reject({ message: "Processo de login já está em progersso." });
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          reject({
            message:
              "Google Play Services está desatualizado ou não disponivel.",
          });
          break;
        default:
          console.log("erro não identificado ->", error.message);
          reject({
            message: "Ocorreu um erro não identificado.",
            statusCode: error.code,
          });
          break;
      }
    }
  });
};

export const signOut = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      resolve({ message: "Você foi deslogado." });
    } catch (error) {
      reject({ message: "Ocorreu um erro", error });
    }
  });
};
