import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Enter your account to check if it has been registered Successfully
      </p>
      <p className='footer-subscription-text'>
        Check here
      </p>
      <div className='input-areas text-black'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='email@address.com'
          />
          <button className='bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600'>
            Check
          </button>
        </form>
      </div>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <a href='https://www.instagram.com/ozone3.studios/'>Email</a>
          <a href='https://www.instagram.com/ozone3.studios/'>Phone</a>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <a href='https://www.instagram.com/ozone3.studios/'>Instagram</a>
          <a href='https://www.tiktok.com/@ozone.studios'>TikTok</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
