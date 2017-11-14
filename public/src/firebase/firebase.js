import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//child_removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('Expenses')
//   .once('value')
//   .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((cshot) => {
//             expenses.push({
//                 id: cshot.key,
//                 ...cshot.val()
//             });
//         });
//     console.log(expenses);
//   });

// const subscription = database.ref('Expenses').on('value', (snap) => {
//     const arr = [];
//     snap.forEach((csnap) => {
//         arr.push({
//             id: csnap.key,
//             ...csnap.val()
//         });
//     });
//     console.log(arr);
// });

// database.ref('Expenses/-Kxu_4nTZ3E14wtjSKI6').update({
//     amount: 'not 69'
// })


// database.ref('expenses').push({
//     expense: 'condoms',
//     amount: '69',
//     createdAt: 1000
// });


//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     databse.ref('age').set(28);
// }, 3500);

// const subscription = database.ref().on('value', (snapshot) => {
//     const log = snapshot.val();
//     console.log(`${log.name} is a ${log.job.title} at ${log.job.company}`);
// });

// database.ref().update({
//     name: 'pauleen'
// });

// database.ref('notes').push({
//     title: 'to bang 2',
//     body: 'angelina Jolie'
// });



// const firebaseNotes = {
//     notes: {

//     }
// }
// const notes = [{
//     id: '27',
//     title: 'note1',
//     body: 'write notes here'
// }, {
//     id: '72',
//     title: 'note2',
//     body: 'write notes here'
// }];

// database.ref('notes').set(notes);




//   database.ref().set({
//       name: 'Thomas Huynh',
//       age: 25,
//       job: {
//           title: 'software developer',
//           company: 'google'
//       },
//       stressLevel: 6,
//       location: {
//           city: 'irvine',
//           country: 'US of A'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((error) => {
//       console.log('This failed', error);
//   }); 


//   database.ref().update({
//     stressLevel: 9,
//     'location/city': 'seattle',
//     'job/company': 'amazon'
//   });

//   database.ref('isSingle').set(null);

//   database.ref().set( ' this is my data ');

// database.ref('age').set(27);
// database.ref('location/city').set('tustin');
// database.ref('attributes/height').set(69);
// database.ref('attributes/weight').set(167);

// database.ref('attribute').set({
//     height: 69,
//     weight: 167
// }).then(() => {
//     console.log('Data is updated');
// }).catch((error) => {
//     console.log('Update failed', error);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('data is removed');
// }).catch((e) => {
//     console.log('remove failed', e);
// });
