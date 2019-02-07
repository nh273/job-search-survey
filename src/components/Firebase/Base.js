import Rebase from "re-base";
import firebase from "firebase";

var devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "job-search-survey.firebaseapp.com",
  databaseURL: "https://job-search-survey.firebaseio.com",
  projectId: "job-search-survey",
  storageBucket: "job-search-survey.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const firebaseApp = firebase.initializeApp(devConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
