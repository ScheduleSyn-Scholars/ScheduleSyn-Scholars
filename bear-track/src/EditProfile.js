import React, { Component } from "react";
import './components/EditProfile.css';
import UploadPFP from "./components/UploadPFP";
import { Avatar }from "antd";
import { Link} from "react-router-dom";

class EditProfile extends Component {


    render(){
        return (
            <div className = "background">
                <div className = "websiteLogo"></div>
                <div className = "AppTitle">Schedule Planner</div>
                <div className = "ProfilePicture"></div>
                <div className = "ProfilePicSelect" onClick={() => uploadPhoto}></div>
                <div className = "websiteHeader">My Profile</div>
                <div className = "email">Email: </div>
                <div className = "ProfileName">Profile Name: <input type="text" id="profileNameInput" value = {profileName} onChange={handleProfileNameChange}></input></div>
                <div className = "saveButton" OnClick={() => saveName()}>Save</div>
    
            </div>
        )
    }
}


export default EditProfile;

