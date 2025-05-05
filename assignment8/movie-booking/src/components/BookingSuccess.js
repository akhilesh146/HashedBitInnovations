import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingSuccess() {
  const { state } = useLocation();

  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Seat Booked Successfully!</h2>
      <p>Booking ID: <strong>{bookingId}</strong></p>
      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Mobile: {state?.mobile}</p>
    </div>
  );
}

export default BookingSuccess;
