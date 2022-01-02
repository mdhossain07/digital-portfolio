import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import photo from '../../images/profile.jpg';
import './Profile.css';
const Profile = () => {
    return (
        <main>
            <div className='info'>
                <img className = "main--img" src = {photo} alt =""/>
                <h2 className='main--title'>Laura Smith</h2>
                <p className ="main--post"> Frotend Developer</p>
                <p className='main--website'>laurasmith.website</p>
            </div>

            <div className='buttons'>
                <button className='email' >Email</button>
                <button className='link'>LinkedIn</button>
            </div>
        </main>
    );
};

export default Profile;