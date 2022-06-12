import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
 } from 'firebase/auth';
import { 
  getFirestore,
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-3XT6TleQ5i4lmyXrQUEIfT3tfFDQ6B8",
  authDomain: "crwn-clothing-db-a44fd.firebaseapp.com",
  projectId: "crwn-clothing-db-a44fd",
  storageBucket: "crwn-clothing-db-a44fd.appspot.com",
  messagingSenderId: "242444108171",
  appId: "1:242444108171:web:5a0654dc2f2dde690faf8e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = Date.now();

   try {
    await setDoc(userDocRef, {
      email,
      displayName,
      createdAt,
      ...additionalInformation
    })
   } catch (error) {
     console.log('Error creating the user', error)
   }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

