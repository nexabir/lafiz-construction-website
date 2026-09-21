# 🔥 Firebase Setup Guide for LAFIZ Admin Panel

Follow these steps to enable the admin panel and dynamic content management.

---

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Name it: `lafiz-website` (or anything you prefer)
4. Disable Google Analytics (optional) → Click **Create project**

## Step 2: Register Your Website

1. In the Firebase console, click the **Web icon** `</>` (Add app)
2. App nickname: `lafiz-web`
3. Click **Register app**
4. Copy the `firebaseConfig` object shown on screen

## Step 3: Update firebase-config.js

1. Open `Website/js/firebase-config.js`
2. Replace the placeholder values with your copied config:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",           // from your Firebase config
  authDomain: "lafiz-website.firebaseapp.com",
  projectId: "lafiz-website",
  storageBucket: "lafiz-website.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 4: Enable Authentication

1. In Firebase console → **Build** → **Authentication**
2. Click **Get started**
3. Under "Sign-in providers", click **Email/Password**
4. Enable it → Click **Save**
5. Go to **Users** tab → Click **Add user**
6. Enter your admin email and password → Click **Add user**

## Step 5: Create Firestore Database

1. In Firebase console → **Build** → **Firestore Database**
2. Click **Create database**
3. Select **Start in test mode** → Click **Next**
4. Choose a location closest to Bangladesh (e.g., `asia-south1`) → Click **Enable**

## Step 6: Enable Storage (for image uploads)

1. In Firebase console → **Build** → **Storage**
2. Click **Get started**
3. Select **Start in test mode** → Click **Next**
4. Choose the same location → Click **Done**

## Step 7: Set Firestore Security Rules (Optional but Recommended)

Once everything works, update Firestore rules for production:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can write
    match /siteContent/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

And Storage rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 8: Access the Admin Panel

1. Open your site: `https://your-domain.vercel.app/admin/`
2. Sign in with the email/password you created
3. Edit any section and click **Save**
4. Changes appear on the main site immediately (no redeploy needed!)

---

## 🎉 That's it!

- **Main site** loads content from Firestore automatically
- **Admin panel** lets you edit everything: text, images, logos, projects, team, etc.
- **Image uploads** go to Firebase Storage and are served via CDN
- **No redeploy needed** — changes are live instantly

## Troubleshooting

- **"Firebase not configured"** → Make sure you updated `firebase-config.js` with real values
- **"Permission denied"** → Check Firestore/Storage security rules
- **Images not uploading** → Make sure Storage is enabled and rules allow writes
- **Content not updating on main site** → Hard refresh (Ctrl+Shift+R) to clear cache
