// src/pages/Contact.jsx
import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-title">Contact Us</p>

      <form
        className="contact-form"
        action="https://formsubmit.co/apparel.raven.corp@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />

        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your Name" required />
        </label>

        <label>
          <span>Phone number</span>
          <input type="text" name="Phone" placeholder="Your Phone" required />
        </label>

        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>

        <label>
          <span>Message</span>
          <textarea name="message" placeholder="Type your message here..." required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
