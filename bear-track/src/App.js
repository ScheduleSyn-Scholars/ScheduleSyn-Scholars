import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Homepage from './pages/HomePage';
import MyProfile from "./pages/MyProfile";
//import data from "./mock-data.json";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>{data.id}</h1>
//       <p>{data.password}</p>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/MyProfile" element={<MyProfile />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;