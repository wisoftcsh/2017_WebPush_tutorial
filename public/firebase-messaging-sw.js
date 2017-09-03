importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase.js');

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = "Notification: WiSoft Lab.";
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});