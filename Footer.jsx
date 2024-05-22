import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.youtube.com/"><img src={youtube_icon} alt="YouTube" /></a>
        <a href="https://twitter.com/"><img src={twitter_icon} alt="Twitter" /></a>
        <a href="https://www.instagram.com/"><img src={instagram_icon} alt="Instagram" /></a>
        <a href="https://www.facebook.com/"><img src={facebook_icon} alt="Facebook" /></a>
      </div>
   
    <ul>
      <li>Audio Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centee</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Noticies</li>
      <li>Cookie Prefernces</li>
      <li>Corporate Information</li>
      <li>Contact us</li>
    </ul>
    <div className="copyright-text">@ 1997-2024 Netflix, Inc.</div>
    </footer>
  );
}

export default Footer;
