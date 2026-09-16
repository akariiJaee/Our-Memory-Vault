// 1. Go to https://cloudinary.com and create a free account (no card required).
// 2. On your Dashboard, copy your "Cloud name" (shown near the top).
// 3. Go to Settings (gear icon) > Upload > Scroll to "Upload presets" > "Add upload preset".
//    - Set "Signing Mode" to "Unsigned" (this is required — it's what lets the site
//      upload directly from the browser without a secret key).
//    - Save, then copy the preset's name.
// 4. Paste both values below.

const cloudinaryConfig = {
  cloudName: "r3yn71ct",
  uploadPreset: "r3yn71ct"
};
