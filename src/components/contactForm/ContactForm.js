import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {


  return (
    <>
      <form onSubmit={handleSubmit}>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>

      <label>
        PhoneNumber:
        <input 
          type="tel" 
          value={phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

      </label>

      <label>
        Email:
        <input 
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}/>
      </label>

        <input type='submit' />
      </form>
    </>
    
  );

};
