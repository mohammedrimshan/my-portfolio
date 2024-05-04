import React, { useRef, useState } from "react";
import "./Contact.css";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { socialmedia } from "../../constants";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled and email is valid
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (formData.name && formData.msg && formData.email && isValidEmail(formData.email)) {
      // Send email
      emailjs
        .send(
          "service_gh178wc",
          "template_s09tamk",
          {
            from_name: formData.name,
            to_name: "Rimshan", // Change this to "Rimshan" or remove if unnecessary
            from_email: formData.email,
            to_email: "rimshanshanu55@gmail.com", // Change this to your email or remove if unnecessary
            msg: formData.msg,
            email: formData.email,
          },
          "3VJjJlQ-x0WtTXpqs"
        )
        .then(result => {
          toast.success("Look at my styles.", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
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
            color: "#2196f3",
            textShadow:
              "0px 0px 1px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
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
            answer any questions you may have. Whether you're interested in may
            services, have a project you'd like to discuss, or just want to say
            hello, please feel free to reach out to us using the contact form.
          </p>
          <div className="social-media">
            <a
              href={socialmedia[0].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" />
            </a>
            <a
              href={socialmedia[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href={socialmedia[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href={`mailto:${socialmedia[0].email}`}
              rel="noopener noreferrer"
            >
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
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              rows="4"
              placeholder="Message"
              id="msg"
              required
              value={formData.msg}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
