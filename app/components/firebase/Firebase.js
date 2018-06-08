import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCxt8CLcYQsnmKPIcNYF_dwUM-_pngBSKU",
  authDomain: "effa-8e729.firebaseapp.com",
  databaseURL: "https://effa-8e729.firebaseio.com",
  projectId: "effa-8e729",
  storageBucket: "effa-8e729.appspot.com",
  messagingSenderId: "687747870529"
};

export default class Firebase {
  static auth;
  static db;
  static init(){
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
    Firebase.db = firebase.database();
  }
}