// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBakNPWPiUraXEn-r2PvIElXlX0Emvg92Y',
  authDomain: 'plantcare-react.firebaseapp.com',
  projectId: 'plantcare-react',
  storageBucket: 'plantcare-react.appspot.com',
  messagingSenderId: '1097443797923',
  appId: '1:1097443797923:web:d20c85e6390e83241f0816',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(FirebaseApp)
export const DB = getAuth(FirebaseApp)
