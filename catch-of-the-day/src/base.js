import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCAuMS8o8d9C0tDLZQ6yQmWyB9rw4ZCHPA',
  authDomain: 'catch-of-the-day-ryan-ca4aa.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ryan-ca4aa.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
