import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <footer>
            <TwitterIcon className='footer--icon'/>
            <FacebookIcon className='footer--icon'/>
            <InstagramIcon className='footer--icon'/>
            <GitHubIcon className='footer--icon'/> 
        </footer>
    );
};

export default Footer;