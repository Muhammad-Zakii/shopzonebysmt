import React, { useState } from 'react';
import api from '../../utils/https'; // Import the Axios instance

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData({ ...formData, [name]: value });

    // Clear the associated error when the input changes
    setErrors((prevState) => ({ ...prevState, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Validation for the Name field (not empty)
    if (!formData.name) {
      setErrors((prevState) => ({ ...prevState, name: 'Name is required' }));
      setLoading(false);
      return;
    }

    // Validation for the Email field (not empty and valid format)
    if (!formData.email) {
      setErrors((prevState) => ({ ...prevState, email: 'Email is required' }));
      setLoading(false);
      return;
    } else if (!validateEmail(formData.email)) {
      setErrors((prevState) => ({ ...prevState, email: 'Invalid email format' }));
      setLoading(false);
      return;
    }

    // Validation for the Message field (not empty)
    if (!formData.message) {
      setErrors((prevState) => ({ ...prevState, message: 'Message is required' }));
      setLoading(false);
      return;
    }

    try {
      await api.post('/send-email', formData);
      setSuccessMessage('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send the message:', error);
      setSuccessMessage('');
      setErrors({ message: 'Failed to send the message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 m-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 mb-6 text-shadow-lg">
              Contact Us
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 text-shadow-md">
              Have questions, suggestions, or feedback? We'd love to hear from you. Send us a message using the form below.
            </p>
          </div>
          <div>
            <form className="bg-gray-900 rounded-[30px] shadow-lg p-6" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-100 font-semibold text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={handleInputChange}
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-100 font-semibold text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-100 font-semibold text-lg mb-2">
                  Phone
                </label>
                <input
                  type="text" // Plain text input for phone
                  id="phone"
                  name="phone"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-100 font-semibold text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button
                  className="bg-gray-600 text-white px-5 py-2 rounded-full font-semibold hover-bg-gray-800 transition-colors duration-300"
                  type="submit"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
