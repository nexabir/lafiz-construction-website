// ============================================================================
// FIREBASE CONFIGURATION
// ============================================================================
// IMPORTANT: Replace the values below with your Firebase project config.
//
// HOW TO GET THESE VALUES:
// 1. Go to https://console.firebase.google.com/
// 2. Click "Add project" → name it (e.g. "lafiz-website") → Create
// 3. Click the Web icon (</>) → Register app → name it "lafiz-web"
// 4. Copy the firebaseConfig object and paste it below
// 5. Go to Authentication → Sign-in method → Enable "Email/Password"
// 6. Go to Firestore Database → Create database → Start in test mode
// 7. Go to Storage → Get started → Start in test mode
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyAhhQaG2QTAF8B0g4Ud5AGGkqBJvt6ReTQ",
  authDomain: "lafiz-web.firebaseapp.com",
  projectId: "lafiz-web",
  storageBucket: "lafiz-web.firebasestorage.app",
  messagingSenderId: "914899091895",
  appId: "1:914899091895:web:1b6a8fb619592b1da0a832",
  measurementId: "G-WTY9297DVZ"
};

// Initialize Firebase (loaded via script tags in HTML)
// These globals come from the CDN scripts: firebase, firebase.auth, firebase.firestore, firebase.storage
let app, auth, db, storage;

function initFirebase() {
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded. Add the CDN scripts to your HTML.');
    return false;
  }
  app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  storage = firebase.storage();
  return true;
}
