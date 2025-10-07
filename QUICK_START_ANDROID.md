# Quick Start: Deploy to Google Play

## 🚀 Fast Track to Google Play Store

Follow these steps to deploy your Code Learning Simulator to Google Play.

## Step 1: Install Capacitor (One-time setup)

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

## Step 2: Initialize Your App

```bash
# Option 1: Use the automated script
npm run android:init

# Option 2: Manual initialization (replace with your package name)
npx cap init "Code Learning Simulator" "com.yourname.codelearning" --web-dir=out
```

**Important:** Choose a unique package ID (e.g., `com.yourname.codelearning`)

## Step 3: Build for Android

```bash
# This will build the web app and prepare for Android
npm run build:android

# Add Android platform
npm run android:add

# Sync and open Android Studio
npm run android:build
```

This opens Android Studio automatically!

## Step 4: In Android Studio

### A. First-Time Setup

1. Wait for Gradle sync to complete
2. Update app details in `android/app/src/main/res/values/strings.xml`:
   ```xml
   <string name="app_name">Code Learning Simulator</string>
   ```

3. Set version in `android/app/build.gradle`:
   ```gradle
   versionCode 1
   versionName "1.0.0"
   ```

### B. Generate Signing Key (One-time only)

```bash
cd android
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

**⚠️ CRITICAL:** Save your passwords! You'll need them forever!

### C. Configure Signing

Create `android/key.properties`:
```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=my-key-alias
storeFile=my-release-key.keystore
```

Update `android/app/build.gradle` (add at top):
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

## Step 5: Build Release AAB

### In Android Studio:
1. **Build → Generate Signed Bundle / APK**
2. Select **Android App Bundle**
3. Choose your keystore
4. Select **release**
5. Click **Finish**

### Or via Terminal:
```bash
cd android
./gradlew bundleRelease
```

Output file: `android/app/build/outputs/bundle/release/app-release.aab`

## Step 6: Test on Device (Optional)

Build APK for testing:
```bash
cd android
./gradlew assembleRelease
adb install app/build/outputs/apk/release/app-release.apk
```

## Step 7: Prepare Play Store Assets

### Required Assets:
1. **App Icon** (512x512 PNG)
2. **Feature Graphic** (1024x500 PNG)
3. **Screenshots** (minimum 2)
   - Phone: 1080x1920 to 1440x2560
4. **Short Description** (max 80 characters)
5. **Full Description** (max 4000 characters)
6. **Privacy Policy** (URL)

### Suggested Descriptions:

**Short:**
```
Learn programming basics with interactive code analysis in 4 languages
```

**Full:**
```
🎓 Code Learning Simulator - Your Interactive Programming Companion

Master programming fundamentals with an innovative educational tool designed for beginners!

✨ KEY FEATURES:

📊 Code Analysis (Code → Data)
• Paste any code snippet
• Get instant structured breakdown
• Understand variables, steps, and output
• Learn programming logic visually

⚡ Code Generation (Data → Code)
• Write in plain language
• Generate working code instantly
• Support for Python, Java, TypeScript & C++
• Perfect for homework and learning

📚 Built-in Learning Resources
• 32 ready-to-use examples
• 12 reference tables covering basics
• Appendix with syntax comparisons
• All content works offline!

🌍 WORKS COMPLETELY OFFLINE
No internet needed after installation!

💻 SUPPORTED LANGUAGES:
• Python 🐍
• Java ☕
• TypeScript 📘
• C++ ⚡

🎯 PERFECT FOR:
• Programming students
• Self-learners
• CS course preparation
• Quick syntax reference
• Understanding code examples

📱 MOBILE-FIRST DESIGN
Optimized for learning on the go!

🌙 Dark/Light Theme
Study comfortably anytime!

Start your coding journey today! 🚀
```

## Step 8: Create Google Play Listing

1. Go to [Google Play Console](https://play.google.com/console)
2. Pay $25 one-time developer fee (if first app)
3. Click **Create App**
4. Fill required information:
   - App name: "Code Learning Simulator"
   - Default language: English
   - App or Game: App
   - Free or Paid: Free

5. Complete all sections:
   - Store listing
   - App content (questionnaires)
   - Pricing & distribution

6. Upload your AAB file
7. Submit for review

## Step 9: Wait for Approval

- Review typically takes 1-7 days
- You'll receive email updates
- Address any feedback promptly

## 🔄 Future Updates

When updating your app:

1. Update version in `android/app/build.gradle`:
   ```gradle
   versionCode 2  // Increment
   versionName "1.0.1"
   ```

2. Rebuild:
   ```bash
   npm run build:android
   npm run android:sync
   cd android
   ./gradlew bundleRelease
   ```

3. Upload new AAB to Play Console
4. Submit for review

## ✅ Checklist

Before submitting:

- [ ] Tested app on real device
- [ ] All features work offline
- [ ] App icon looks good
- [ ] Screenshots are high quality
- [ ] Descriptions are clear
- [ ] Privacy policy ready
- [ ] AAB file built successfully
- [ ] Keystore backed up securely

## 🆘 Need Help?

Check the detailed guide: `GOOGLE_PLAY_DEPLOYMENT.md`

## 📞 Common Issues

**Build fails?**
```bash
cd android
./gradlew clean
./gradlew bundleRelease
```

**App won't install?**
```bash
adb uninstall com.yourname.codelearning
adb install app-release.apk
```

**Forgot keystore password?**
You'll need to create a new app with new package ID (can't recover old password)

---

**Good luck! Your app will be live on Google Play soon! 🎉**
