# Setting up your synced Memory Vault (one-time, ~10 minutes)

This connects the site to a free Firebase project so your changes sync
between your device and hers in real time. Only the two accounts you
create below will ever be able to sign in — there is no public sign-up
button anywhere in the app.

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and sign in with any Google account (this can be either of yours — it just owns the project).
2. Click **Add project**, give it any name (e.g. "our-memory-vault"), and finish the wizard (you can decline Google Analytics — not needed).

## 2. Register a web app
1. On your new project's homepage, click the **`</>`** (web) icon.
2. Give it a nickname, click **Register app**.
3. Firebase will show a `firebaseConfig` object with your real keys. Copy those values into `firebase-config.js` (included in this download), replacing the `PASTE_YOUR_...` placeholders.

## 3. Turn on Authentication (Email/Password)
1. In the left sidebar, go to **Build > Authentication > Get started**.
2. Under **Sign-in method**, enable **Email/Password**.
3. Go to the **Users** tab and click **Add user**. The "email" field just needs to look like an email (`something@something.something`) — it doesn't have to be real or receive mail. If you'd rather not use real Gmail addresses, make something up, e.g. `jae@ourmemoryvault.local`, and set a password.
4. Repeat with a different made-up ID for your partner (e.g. `her-name@ourmemoryvault.local`) + her own password.
   (These made-up IDs are the *only* two accounts that will ever be able to open the vault. Since they're not real inboxes, there's no "forgot password" email recovery — write both down somewhere safe.)
   (These are the *only* two accounts that will ever be able to open the vault.)

## 4. Turn on Firestore (the database)
1. Go to **Build > Firestore Database > Create database**.
2. Choose **Start in production mode**, pick any region close to you.
3. Once created, go to the **Rules** tab and replace the contents with the rules in `firestore.rules` (included in this download), then click **Publish**.

## 5. Set up Cloudinary (for photos/videos — free, no card required)
This project uses Cloudinary instead of Firebase Storage, since Firebase now requires a billing card even for free-tier storage. Cloudinary's free tier (~25GB/month) doesn't.

1. Go to https://cloudinary.com and create a free account.
2. On your Dashboard, copy your **Cloud name** (shown near the top of the page).
3. Go to **Settings** (gear icon) **> Upload**, scroll to **Upload presets**, click **Add upload preset**.
4. Set **Signing Mode** to **Unsigned** (this is required — it's what lets the browser upload directly without exposing a secret key). Save it and copy the preset's name.
5. Open `cloudinary-config.js` in your project folder and paste in your Cloud name and preset name.

Note: deleting a photo/video inside the vault only removes it from what you see there — the file itself stays stored on Cloudinary (harmless, and well within the free tier for normal use), since safely deleting it would require a secret key that can't live in browser code.

## 6. Open the site
Open `index.html` in your browser, sign in with either account, and you're in. Do the same on her device with her account — you'll now see the same data on both, updating live.


## Notes & limits
- If two of you edit the exact same field at the exact same moment, the last save wins (normal for a simple two-person sync setup like this).
- `firebase-config.js` isn't a secret by itself — Firebase config values are meant to be public in client apps. What actually keeps your vault private is the security rules in step 4 and 5, and the fact that only two accounts exist. Don't skip publishing those rules.
- Keep `firebase-config.js`, `firestore.rules`, and `cloudinary-config.js` in the same folder structure shown — the app expects them right next to `index.html`.
