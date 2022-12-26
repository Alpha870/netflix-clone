import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAps4gn7VBA6D6UFM-ENGq1XLgWqei_NAI",
  authDomain: "netflix-clone-8dff0.firebaseapp.com",
  projectId: "netflix-clone-8dff0",
  storageBucket: "netflix-clone-8dff0.appspot.com",
  messagingSenderId: "560211192406",
  appId: "1:560211192406:web:1fc43b8df2d7106a04a9f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};
