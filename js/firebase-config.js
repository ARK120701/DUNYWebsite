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
  apiKey: "AIzaSyD4qKsW2ceB32rHXD5nDoN3u2BEkpYglq4",
  authDomain: "dunywebsitefatwas.firebaseapp.com",
  projectId: "dunywebsitefatwas",
  storageBucket: "dunywebsitefatwas.firebasestorage.app",
  messagingSenderId: "817821856577",
  appId: "1:817821856577:web:c80d51df967e1c666d27c0",
  measurementId: "G-37MQY36X2P"
};

const FIREBASE_ENABLED = true;
