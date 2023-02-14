import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBAQhAT4BLiUn9Rt86z6bewuro0RRVnop0',
  authDomain: 'incube-database.firebaseapp.com',
  projectId: 'incube-database',
  storageBucket: 'incube-database.appspot.com',
  messagingSenderId: '153058516745',
  appId: '1:153058516745:web:6804c3fa8082df1b13fdd8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
