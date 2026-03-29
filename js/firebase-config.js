// ═══════════════════════════════════════════════════════════════
// Firebase Configuration — Darul Uloom New York Fatwa Database
// ═══════════════════════════════════════════════════════════════
//
// SETUP INSTRUCTIONS:
// 1. Go to https://firebase.google.com and sign in
// 2. Click "Add project" and create a new project (e.g. "duny-fatwas")
// 3. In the project dashboard, click the web icon </> to add a web app
// 4. Copy the firebaseConfig object and paste it below
// 5. In the left menu, go to Build → Firestore Database → Create database
//    - Choose "Start in test mode" for now
//    - Select a nearby region and click Done
// 6. Set FIREBASE_ENABLED = true below
// 7. Reload the admin panel — fatwas will now sync to Firebase
//
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Set to true once you've filled in your config above
const FIREBASE_ENABLED = false;
