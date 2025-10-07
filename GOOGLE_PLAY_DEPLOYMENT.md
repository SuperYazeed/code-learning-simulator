# Google Play Deployment Guide

## Overview

This guide will help you deploy the Code Learning Simulator to Google Play Store as an Android app using Capacitor.

## Prerequisites

Before starting, ensure you have:
- ✅ Node.js installed
- ✅ Android Studio installed
- ✅ Java JDK 17+ installed
- ✅ A Google Play Developer account ($25 one-time fee)

## Step 1: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

## Step 2: Initialize Capacitor

```bash
npx cap init "Code Learning Simulator" "com.yourname.codelearnin" --web-dir=out
```

Replace `com.yourname.codelearning` with your unique package ID.

## Step 3: Configure for Static Export

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

## Step 4: Build the App

```bash
# Build the Next.js app for production
npm run build

# Add Android platform
npx cap add android

# Sync the web assets to Android
npx cap sync
```

## Step 5: Configure Android App

### Update `capacitor.config.json`:

```json
{
  "appId": "com.yourname.codelearning",
  "appName": "Code Learning Simulator",
  "webDir": "out",
  "server": {
    "androidScheme": "https",
    "hostname": "app.codelearning.local"
  },
  "android": {
    "allowMixedContent": true
  }
}
```

### Update App Icons

1. Create app icons (512x512, 1024x1024)
2. Use Android Studio's Image Asset tool to generate all sizes
3. Or use online tools like https://icon.kitchen

### Update AndroidManifest.xml

Located at: `android/app/src/main/AndroidManifest.xml`

Add permissions if needed:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Step 6: Open in Android Studio

```bash
npx cap open android
```

This will open the project in Android Studio.

## Step 7: Configure App Details

In Android Studio:

1. **Update App Name:**
   - `android/app/src/main/res/values/strings.xml`
   ```xml
   <resources>
       <string name="app_name">Code Learning Simulator</string>
   </resources>
   ```

2. **Update Package Name:**
   - Already set via Capacitor init

3. **Set Version:**
   - `android/app/build.gradle`
   ```gradle
   android {
       defaultConfig {
           versionCode 1
           versionName "1.0.0"
       }
   }
   ```

## Step 8: Generate Signing Key

```bash
# Navigate to android folder
cd android

# Generate keystore (one-time only)
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# Remember your passwords!
```

Save the keystore file securely - you'll need it for all future updates!

## Step 9: Configure Signing

Create `android/key.properties`:

```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=my-key-alias
storeFile=my-release-key.keystore
```

Update `android/app/build.gradle`:

```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## Step 10: Build Release APK/AAB

### Option A: Build AAB (Recommended for Google Play)

In Android Studio:
1. Go to **Build → Generate Signed Bundle / APK**
2. Select **Android App Bundle**
3. Choose your keystore
4. Select **release** build variant
5. Click **Finish**

Or via command line:
```bash
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Option B: Build APK (For Testing)

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

## Step 11: Test the Release Build

Install on device:
```bash
adb install android/app/build/outputs/apk/release/app-release.apk
```

Test thoroughly:
- ✅ All features work
- ✅ Offline functionality
- ✅ Code analysis
- ✅ Code generation
- ✅ Examples load
- ✅ Appendix opens
- ✅ UI looks good

## Step 12: Prepare Play Store Assets

### Screenshots (Required)
- Minimum 2 screenshots
- Recommended: 4-8 screenshots
- Phone: 1080x1920 to 1440x2560
- Tablet: 1536x2048 to 2048x2732

### Feature Graphic (Required)
- Size: 1024x500
- Showcases app name and key features

### App Icon (Required)
- 512x512 PNG
- No alpha channel

### Short Description (Required)
- Max 80 characters
- Example: "Learn programming basics with interactive code analysis in 4 languages"

### Full Description (Required)
- Max 4000 characters
- Include features, benefits, how to use

### Privacy Policy (Required for apps collecting data)
- Host on a website or GitHub Pages
- If app doesn't collect data, state that clearly

## Step 13: Create Play Store Listing

1. Go to https://play.google.com/console
2. Click **Create App**
3. Fill in basic details:
   - App name: Code Learning Simulator
   - Default language: English
   - App/Game: App
   - Free/Paid: Free

4. Complete all required sections:
   - **Store listing**
   - **App content** (questionnaires)
   - **Pricing & distribution**

5. Upload your AAB file

6. Complete content rating questionnaire

7. Set up pricing (Free) and countries

## Step 14: Submit for Review

1. Review all sections (green checkmarks)
2. Click **Send for Review**
3. Wait for approval (usually 1-7 days)

## Step 15: Future Updates

When you update the app:

1. Update version in `android/app/build.gradle`:
   ```gradle
   versionCode 2  // Increment by 1
   versionName "1.0.1"  // Update version name
   ```

2. Rebuild:
   ```bash
   npm run build
   npx cap sync
   cd android
   ./gradlew bundleRelease
   ```

3. Upload new AAB to Play Console
4. Submit for review

## Common Issues & Solutions

### Issue: "Server not responding"
**Solution:** Make sure `server.ts` is configured for production in Capacitor environment.

### Issue: "App crashes on start"
**Solution:** Check logs: `adb logcat | grep -i error`

### Issue: "Build failed"
**Solution:** Clean and rebuild:
```bash
cd android
./gradlew clean
./gradlew bundleRelease
```

### Issue: "Keystore problems"
**Solution:** Ensure key.properties path is correct and passwords match.

## Quick Reference Commands

```bash
# Build web app
npm run build

# Sync to Android
npx cap sync

# Open in Android Studio
npx cap open android

# Build release AAB
cd android && ./gradlew bundleRelease

# Build release APK
cd android && ./gradlew assembleRelease

# Install on device
adb install app-release.apk

# View logs
adb logcat
```

## Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Google Play Console](https://play.google.com/console)
- [Android Developer Guide](https://developer.android.com/studio)
- [Icon Generator](https://icon.kitchen)
- [Screenshot Tools](https://www.mockuphone.com)

## Estimated Timeline

- **Setup & Configuration:** 1-2 hours
- **First Build:** 30 minutes
- **Testing:** 1-2 hours
- **Play Store Setup:** 2-3 hours
- **Review Process:** 1-7 days
- **Total:** ~1-2 days + review time

## Tips for Success

1. ✅ Test thoroughly before submission
2. ✅ Use high-quality screenshots
3. ✅ Write clear, descriptive listing
4. ✅ Follow Google Play policies
5. ✅ Respond to user reviews
6. ✅ Keep app updated regularly
7. ✅ Backup your keystore file!

Good luck with your Google Play deployment! 🚀
