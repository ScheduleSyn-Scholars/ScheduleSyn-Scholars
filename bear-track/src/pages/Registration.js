import React, {useState} from 'react'
import './Registration.css'
import firebase from '../config/firebase';
import 'firebase/compat/firestore';


const Form = () => {

  const db = firebase.firestore();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting (which would refresh the page)

    // You can access all the form data as an object in 'formData' state variable
    console.log(formData);
  };

      const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      const signUp = async () => {
        addDocument()
        
      }
    
      const addDocument = () => {
        console.log("starting to add doc")
        // Add a new document to Firestore
        db.collection('users')
          .add(formData)
          .then((docRef) => {
            if(docRef) {
              alert("Register Successfully")
              } else {
                  alert("Error Occurred")
              }
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      };
  return (
    <>
    <div className='form'>
      <div className='container'>
        

        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={signUp}>Sign Up</button>
      </div>
    </form>
      </div>
    </div>
    </>
  )
}

export default Form