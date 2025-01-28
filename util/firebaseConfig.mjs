import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzzXZag6cwzGRewQZUPngo3-WqB0D6-rU",
  authDomain: "webdesignoficial-5dcdd.firebaseapp.com",
  projectId: "webdesignoficial-5dcdd",
  storageBucket: "webdesignoficial-5dcdd.appspot.com",
  messagingSenderId: "846571428100",
  appId: "1:846571428100:web:d43a991923d76ced0dd851",
  databaseURL: "https://webdesignoficial-5dcdd-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
