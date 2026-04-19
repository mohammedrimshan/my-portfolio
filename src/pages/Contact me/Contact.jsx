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

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const validateField = (name, value) => {
    let errorMessage = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) errorMessage = 'Name is required.';
        else if (value.trim().length < 2) errorMessage = 'Name must be at least 2 characters.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errorMessage = 'Email is required.';
        else if (!emailRegex.test(value)) errorMessage = 'Please enter a valid email address.';
        break;
      case 'message':
        if (!value.trim()) errorMessage = 'Message is required.';
        else if (value.trim().length < 10) errorMessage = 'Message must be at least 10 characters.';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
    return errorMessage;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Final validation check before submission
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const messageErr = validateField('message', formData.message);

    if (nameErr || emailErr || messageErr) {
      warning('Please fix the errors in the form.');
      return;
    }

    // If all validations pass, send the email
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xd7ti39',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gw1zo2l',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'loNUkj4bjNRG6RoD1'
      )
      .then((result) => {
        success('Email sent successfully.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email sending error:', err, err.text, err.status);
        error(`Failed to send email: ${err.text || 'Please try again later.'}`);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    validateField(id, value);
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
            <div className="form-group">
              <input
                type="text"
                placeholder="Your name"
                id="name"
                name="name"
                className={errors.name ? 'invalid' : ''}
                value={formData.name}
                onChange={handleInputChange}
                onBlur={(e) => validateField('name', e.target.value)}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className={errors.email ? 'invalid' : ''}
                value={formData.email}
                onChange={handleInputChange}
                onBlur={(e) => validateField('email', e.target.value)}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                rows="4"
                placeholder="Message"
                id="message"
                name="message"
                className={errors.message ? 'invalid' : ''}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={(e) => validateField('message', e.target.value)}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

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