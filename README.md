# Deprecation Warning

This project is deprecated since 27.09.2021. Please refer to https://github.com/celikkoseoglu/unver-legal-website-nextjs to see the latest version.

<hr>

<h1 align="center">
  UnverLegal
</h1>
<h2 align="center">
  unverlegal.web.app - website
</h2>
<p align="center">
  Unverlegal Website <a href="https://unverlegal.web.app" target="_blank">unverlegal.web.app</a> is a fork of <a href="https://github.com/celikkoseoglu/celikk-personal-website" target="_blank">celikk.me</a>. Hosted on <a href="https://firebase.google.com/docs/hosting" target="_blank">Firebase</a>.
</p>

## 🛠 Development Setup

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the development server

   ```sh
   npm start
   ```

## 🚀 Deployment

I use Firebase for hosting, but this project is platform agnostic. Feel free to use other hosting platforms.

1. Generate a full static production build

   ```sh
   npm run-script build
   ```

2. Install Firebase
   ```sh
   npm install -g firebase-tools
   ```
   
3. Login with Firebase

   ```sh
   firebase login
   ```

4. Link with Firebase Project

   ```sh
   firebase use --add
   ```

5. Deploy using Firebase

   ```sh
   firebase deploy
   ```

## ❓ If you don't understand how a certain part works;

Watch how I implemented it for celikk.me. See readme [here](https://github.com/celikkoseoglu/celikk-personal-website).

## 🚨 Forking this repo and copying code

See readme file [here](https://github.com/celikkoseoglu/celikk-personal-website).
