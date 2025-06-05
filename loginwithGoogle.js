import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBda0D6X1wpXhXnzPJUlS5dzpZhNRqyxm0",
    authDomain: "cloud-proj-auth.firebaseapp.com",
    projectId: "cloud-proj-auth",
    storageBucket: "cloud-proj-auth.firebasestorage.app",
    messagingSenderId: "286676867637",
    appId: "1:286676867637:web:57ad5b81b6f4e6e465ef7c",
    measurementId: "G-081NVL0Q8P"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById('google');
  const submit_signin = document.getElementById('googlesignin');
  const logout = document.getElementById('logout');
  
  if (submit) {
    submit.addEventListener("click", function(e) {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          alert("Google user created");
          window.location.href = "clothing-options.html";
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  if (submit_signin) {
    submit_signin.addEventListener("click", function(e) {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          alert("Google user signed in");
          window.location.href = "clothing-options.html";
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  if(logout){
    logout.addEventListener("click", function(e){
      e.preventDefault();
      signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sign Out Success")
      }).catch((error) => {
        // An error happened.

      });
    })
  }
});
