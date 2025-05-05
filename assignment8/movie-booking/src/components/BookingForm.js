import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success', { state: { ...form } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Book Your Seat</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
