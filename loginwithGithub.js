import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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
const provider = new GithubAuthProvider();

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById('github');
  const submit_signin = document.getElementById('githubsignin');
  const logout = document.getElementById('logout');

  if (submit) {
    submit.addEventListener("click", function(e) {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          alert("Github se user bangya...");
          window.location.href = "clothing-options.html";

          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
          alert(errorMessage);
        });
    });
  }

  if (submit_signin) {
    submit_signin.addEventListener("click", function(e) {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          alert("Github se user bangya...");
          window.location.href = "clothing-options.html";

          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
          alert(errorMessage);
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
