// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage, ref,getDownloadURL, uploadBytesResumable } from "firebase/storage";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//Initialize Storage
const storage = getStorage(firebase_app);
const storageRef = ref(storage);

export default firebase_app;

export const profileImage = async (imageUrl) => {
  const response = await fetch(imageUrl)
  const file = await response.blob();
  const userStorageRef = ref(storageRef, `/user/profilePicture/${file.name}`);

  const uploadTask = uploadBytesResumable(userStorageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.log('Upload complete!');
    }
  );

  await uploadTask;

  const downloadURL = await getDownloadURL(userStorageRef);

  return downloadURL;
};

export const certificateImage = async (imageUrl) => {
  const response = await fetch(imageUrl)
  const file = await response.blob();
  const userStorageRef = ref(storageRef, `/user/certificateImage/${file.name}`);

  const uploadTask = uploadBytesResumable(userStorageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.log('Upload complete!');
    }
  );

  await uploadTask;

  const downloadURL = await getDownloadURL(userStorageRef);

  return downloadURL;
};