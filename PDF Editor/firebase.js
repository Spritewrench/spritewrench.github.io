

        // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
      import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
      //import {  getDatabase, ref, set, onValue  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js"
      import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";



      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyBPiNXJBwzgo-ly8apRjAAcrIxCm6TEXYw",
        authDomain: "newletter-manager.firebaseapp.com",
        projectId: "newletter-manager",
        storageBucket: "newletter-manager.appspot.com",
        messagingSenderId: "258587427122",
        appId: "1:258587427122:web:13f12f383acdfb94b4172b",
        measurementId: "G-7KWKK6PSPW"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const storage = getStorage();
      

      
     

      export function uploadFile(fileName, bytes){
        const storageRef = ref(storage, fileName);
        uploadBytes(storageRef, bytes).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          
        });
      }

      export function getFileURL(fileName){
        return getDownloadURL(ref(storage, fileName))

      }


