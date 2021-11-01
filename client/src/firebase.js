import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC0yS7Urx8s9o_sGYrgKb7YLcHbtDgv9LQ',
  authDomain: 'blog-83a6a.firebaseapp.com',
  projectId: 'blog-83a6a',
  storageBucket: 'blog-83a6a.appspot.com',
  messagingSenderId: '261992052422',
  appId: '1:261992052422:web:198a3d20b8fc52a13e09c7',
  measurementId: 'G-XFT5KEED1S',
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export default storage;
