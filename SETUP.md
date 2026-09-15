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
3. Go to the **Users** tab and click **Add user** — add your email + a password.
4. Repeat to add your partner's email + password.
   (These are the *only* two accounts that will ever be able to open the vault.)

## 4. Turn on Firestore (the database)
1. Go to **Build > Firestore Database > Create database**.
2. Choose **Start in production mode**, pick any region close to you.
3. Once created, go to the **Rules** tab and replace the contents with the rules in `firestore.rules` (included in this download), then click **Publish**.

## 5. Turn on Storage (for photos/videos)
**Important:** as of February 2026, Google requires every Firebase project to link a billing card (the "Blaze" plan) before Cloud Storage can be turned on at all — even if you never go past the free quota. You won't be charged unless you go far past the free allowance (5GB stored, 1GB/day downloaded, 20k uploads/day), but Google will ask for a card up front. If you'd rather not add a card, tell me and I'll swap photo/video storage to a provider with a truly cardless free tier (e.g. Cloudinary) instead — the rest of the app stays the same either way.

If you're fine linking a card:
1. Go to **Project settings > Usage and billing > Upgrade to Blaze**, and link a billing account.
2. Go to **Build > Storage > Get started**, choose **Start in production mode**, keep the same region.
3. Go to the **Rules** tab and replace the contents with the rules in `storage.rules` (included in this download), then click **Publish**.

## 6. Open the site
Open `index.html` in your browser, sign in with either account, and you're in. Do the same on her device with her account — you'll now see the same data on both, updating live.

## Notes & limits
- If two of you edit the exact same field at the exact same moment, the last save wins (normal for a simple two-person sync setup like this).
- `firebase-config.js` isn't a secret by itself — Firebase config values are meant to be public in client apps. What actually keeps your vault private is the security rules in step 4 and 5, and the fact that only two accounts exist. Don't skip publishing those rules.
- Keep `firebase-config.js`, `firestore.rules`, and `storage.rules` in the same folder structure shown — the app expects `firebase-config.js` right next to `index.html`.
