import React, { useRef, useEffect } from 'react';
import './Contact.css';
import { useToast } from '../../components/Toast/Toast';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { socialmedia } from '../../constants';

const Contact = () => {
  const formRef = useRef();
  const { success, error, warning } = useToast();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'loNUkj4bjNRG6RoD1');
  }, []);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    console.log('EmailJS Config:', {
      serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xd7ti39',
      templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gw1zo2l',
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'loNUkj4bjNRG6RoD1',
    });

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (formData.name && formData.msg && formData.email && isValidEmail(formData.email)) {
      // Send email
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Change to your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Change to your EmailJS template ID
          {
            from_name: formData.name,
            to_name: "Rimshan", // Change this to "Rimshan" or remove if unnecessary
            from_email: formData.email,
            to_email: "rimshanshanu55@gmail.com", // Change this to your email or remove if unnecessary
            msg: formData.msg,
            email: formData.email,
          },
          "YOUR_USER_ID" // Change to your EmailJS user ID
        )
        .then(result => {
          toast.success("Email sent successfully.",result); // Change success message if necessary
          setFormData({
            name: "",
            email: "",
            msg: "",
          });
        })
        .catch(error => {
          console.error("Email sending error:", error);
          toast.error("An error occurred while sending the email. Please try again later.");
        });
    } else {
      toast.error("Please fill out all required fields with valid data.");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div id="Contact">
      <h1 data-aos="flip-up">
        Contact
        <span
          style={{
            color: '#2196f3',
            textShadow:
              '0px 0px 1px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)',
          }}
        >
          me.
        </span>
      </h1>
      <div className="details">
        <div className="col-1">
          <h1>Get in touch</h1>
          <p>
            Thank you for visiting my website! I would love to hear from you and
            answer any questions you may have. Whether you're interested in my
            services, have a project you'd like to discuss, or just want to say
            hello, please feel free to reach out to us using the contact form.
          </p>
          <div className="social-media">
            <a href={socialmedia[0].github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
            <a href={socialmedia[0].linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icons" />
            </a>
            <a href={socialmedia[0].instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icons" />
            </a>
            <a href={`mailto:${socialmedia[0].email}`} rel="noopener noreferrer">
              <FaEnvelope className="icons" />
            </a>
          </div>
        </div>
        <div className="col-2">
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              rows="4"
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;