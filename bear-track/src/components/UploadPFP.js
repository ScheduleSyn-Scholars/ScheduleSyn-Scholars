import React from "react";
import './components/UploadPFP.css';
import { Modal, Button } from 'antd';
import Avatar from "react-avatar-edit";
import { Link } from "react-router-dom";



// const UploadPFP = ({isOpen, closed}) =>{
//     constructor(props){
//         super(props);
//         this.useState={
//             useState: false;
//         }
//     }
//     const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
    
//     const handleSave = () =>{
//         //Code here to save new profile picture when it happens
//         console.log('Picture is saved!');
//         closed();//Close after it's saved
    
//     };
//     return(
//         <div className = {`upload-pfp ${isOpen ? 'show' : 'hide'}`}>
//             <div className = "upload-pfp-background">
//                 <div className = "uploadTitle">
//                     <h2>Upload Photo</h2>
//                 </div>
//             <div className="uploadPhotoArea">
//                 <p>Click here to upload your photo</p>
//             </div>
//             <div className = "uploadSaveActions">
//                 <button onClick={handleSave} className = "uploadSaveActions">Save</button>
//                 <button onClick={closed} className = "cancelButton">cancel</button>
//             </div>
//             </div>
//         </div>
//     );
// };

export default UploadPFP;



