let firebaseConfig = {
    apiKey: "AIzaSyAMd5t5rGn96jOpzONkG8MY2vcME5ko1k0",
    authDomain: "blog-website-b3a8e.firebaseapp.com",
    projectId: "blog-website-b3a8e",
    storageBucket: "blog-website-b3a8e.appspot.com",
    messagingSenderId: "322594588664",
    appId: "1:322594588664:web:b07f18908bfe2130e1380d"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore(); 