// import React, { useState } from 'react';
// import './SignUp.css'; // Import the CSS file for styling
// import firebase from '../firebase.js'

// // To allow a user to sign up or add a user to the firebase collection of users.

//   const Signup = () => {
//       const [id, setId] =useState('');
//       const [firstName, setFirstName] = useState('');
//       const [lastName, setLastName] = useState('');
//       const [email, setEmail] = useState('');
//       const [password, setPassword] = useState('');

//       const signUp = async () => {
//         firebase.auth().createUserWithEmailAndPassword(id, firstName, lastName, email, password)
//             .then((userCredential) => {
//         // Signed in 
//                 var user = userCredential.user;
//                 // alert("Successful Sign Up");
//         // ...
//             })
//             .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//             // ..
//             });
          
//       }
      
//     return (
//       <div className="signup-container">
//         <div className="signup-left">
//           <h2>Sign Up</h2>
//           <form>
//           <label htmlFor="id">Id:</label>
//             <input type="number" id="Id" name="Id" value={id} 
//               onChange={(e) => setId(e.target.value)} required />

//           <label htmlFor="firstName">First Name:</label>
//             <input type="text" id="firstName" name="firstName" value={firstName} 
//               onChange={(e) => setFirstName(e.target.value)} required />

//             <label htmlFor="lastName">Last Name:</label>
//             <input type="text" id="lastName" name="lastName" value={lastName} 
//               onChange={(e) => setLastName(e.target.value)} required />  

//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" value={email} 
//               onChange={(e) => setEmail(e.target.value)} required />

//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" value={password} 
//               onChange={(e) => setPassword(e.target.value)} required />

//             <button onClick={signUp}>Sign Up</button>
//           </form>
//         </div>
//         <div className="signup-right">
//           {/* Background image will be displayed here */}
//         </div>
//       </div>
//     );
// }

// export default Signup;
