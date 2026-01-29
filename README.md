# 🦸 Hero Workout - Android Fitness App

Train like your favorite heroes! Choose from **The Mandalorian**, **Master Chief**, or **Batman** and get a personalized monthly workout plan that changes daily.

![Hero Workout](https://img.shields.io/badge/Platform-Android-green) ![Expo](https://img.shields.io/badge/Built%20with-Expo-blue) ![React Native](https://img.shields.io/badge/React%20Native-0.73-purple)

## ✨ Features

- **3 Iconic Characters**: Each with unique themed workouts
  - 🪖 **The Mandalorian** - Bounty hunter strength & combat training
  - 🎖️ **Master Chief** - Spartan super-soldier conditioning
  - 🦇 **Batman** - Peak human martial arts & agility

- **Smart Workout Generation**: Different workouts every day based on:
  - Day of the week (strength, cardio, combat, recovery)
  - Rotating exercise selection
  - Variable intensity levels

- **Monthly Calendar View**: Plan your entire month of training

- **Progress Tracking**: Mark exercises as complete and track your progress

- **Character Motivation**: Daily quotes from your chosen hero

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo Go app on your Android phone (for testing)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd HeroWorkout
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Run on Android:**
   - Scan the QR code with the Expo Go app on your Android device
   - Or press `a` in the terminal to open in Android emulator

### Building for Android

To create an APK for installation:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Build APK
eas build -p android --profile preview
```

## 📱 App Structure

```
HeroWorkout/
├── App.js                    # Main app with navigation
├── src/
│   ├── data/
│   │   └── workouts.js       # Character data & workout generator
│   └── screens/
│       ├── CharacterSelectScreen.js
│       ├── CalendarScreen.js
│       └── WorkoutScreen.js
├── app.json                  # Expo configuration
└── package.json
```

## 🎮 How It Works

1. **Select Your Hero**: Choose the character whose training style resonates with you

2. **View Your Calendar**: See the entire month's workout plan with intensity indicators

3. **Start Training**: Tap any day to see the full workout with exercises, sets, and reps

4. **Track Progress**: Check off exercises as you complete them

## 💪 Workout Categories

| Category | Description |
|----------|-------------|
| **Strength** | Heavy compound movements for power |
| **Cardio** | High-intensity intervals and endurance |
| **Combat** | Fighting-style exercises and bag work |
| **Core** | Abdominal and stability training |
| **Flexibility** | Stretching and mobility (Batman only) |

## 🎨 Design Philosophy

- **Cinematic Dark Theme**: Immersive atmosphere matching each character's universe
- **Character-Specific Colors**: Unique accent colors for each hero
- **Motivational Integration**: Daily quotes to keep you inspired

## 📄 License

This project is for personal/educational use. Character names and likenesses are trademarks of their respective owners (Lucasfilm/Disney, 343 Industries/Microsoft, DC Comics/Warner Bros).

---

**"This Is The Way"** 🪖 | **"Spartans Never Die"** 💚 | **"I Am Vengeance"** 🦇
