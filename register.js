import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBda0D6X1wpXhXnzPJUlS5dzpZhNRqyxm0",
      authDomain: "cloud-proj-auth.firebaseapp.com",
      projectId: "cloud-proj-auth",
      storageBucket: "cloud-proj-auth.firebasestorage.app",
      messagingSenderId: "286676867637",
      appId: "1:286676867637:web:57ad5b81b6f4e6e465ef7c",
      measurementId: "G-081NVL0Q8P"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.languageCode = "en"

    const submit = document.getElementById('submit');
    submit.addEventListener("click", function(e){
        e.preventDefault();
    //inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("User Created");
    window.location.href = "signin.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    })