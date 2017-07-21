importScripts('https://wwww.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://wwww.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

const config = {
  apiKey: "AIzaSyDIAJoqvdfiqbBhtJWofuLQyLFRuDPhCxM",
  authDomain: "cloud-messaging-tutorial-1dfc1.firebaseapp.com",
  databaseURL: "https://cloud-messaging-tutorial-1dfc1.firebaseio.com",
  projectId: "cloud-messaging-tutorial-1dfc1",
  storageBucket: "cloud-messaging-tutorial-1dfc1.appspot.com",
  messagingSenderId: "249077514611"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();