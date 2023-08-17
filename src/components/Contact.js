import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Contact() {
    return (
        <div className="contact" id='contact'>
            <h2 className='contact-header'>get in touch</h2>
            <div className="contact-body">
                <div className="contact-left-section">
                    <h4>don't be shy</h4>
                    <p>Feel free to get in touch with me. I am always open to discuss new projects, creative ideas or opportunities to be part of your visions</p>
                    <div className="contact-mail-section">
                        <div className="mail-icon"><EmailOutlinedIcon /></div>
                        <div className="mail-text-content">
                            <h4>Mail me at</h4>
                            <p>dyavaridasharath82@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right-section">
                    <div>
                        <input type="text" className="input-name" placeholder='Enter your Name'/>
                        <input type="email" className="input-email" placeholder='Enter a valid email address'/>
                        <textarea className="input-message" name="message" id="message" cols="30" rows="5" placeholder='Enter your message'></textarea>
                        <div className="alert-box">* Website is in progress.</div>
                    </div>
                </div>
            </div>
            <div className="bottom-page">
                <h2 className='bottom-page-header'>dyavari dasharath</h2>
                <p className='bottom-page-subheading'>Follow me on</p>
                <ul className='contact-icons'>
                    <li className='contact-icon'><a href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><FacebookIcon color='warning'/></a></li>
                    <li className='contact-icon'><a href="https://www.instagram.com/dasharath_116/" target='_blank'><InstagramIcon color='warning'/></a></li>
                    <li className='contact-icon'><a href="https://github.com/Dasharath9920" target='_blank'><GitHubIcon color='warning'/></a></li>
                    <li className='contact-icon'><a href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/" target='_blank'><LinkedInIcon color='warning'/></a></li>
                    <li className='contact-icon'><a href="https://twitter.com/Dashara38665028" target='_blank'><TwitterIcon color='warning'/></a></li>
                </ul>
                <p className='bottom-page-declaimer'>Copyright ©2023 Dasharath. All rights reserved</p>
            </div>
        </div>
    )
}

export default Contact;