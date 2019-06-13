import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoKiXkWLxhGdQyEbpc4jH8E72A3cBNJpI",
  authDomain: "iut-projets-visa.firebaseapp.com",
  databaseURL: "https://iut-projets-visa.firebaseio.com",
  projectId: "iut-projets-visa",
  storageBucket: "iut-projets-visa.appspot.com",
  messagingSenderId: "543984239272",
  appId: "1:543984239272:web:cfeb95ad1309e991"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const firebaseAuth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()

export const serverStamp = firebase.firestore.FieldValue
