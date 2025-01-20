import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneField = ({ onChange }) => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col">
      <label className="mb-2 text-white mix-blend-difference" htmlFor="phone">
        Phone Number
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={handlePhoneChange}
        placeholder={'Enter your phone number'}
        inputStyle={{
          width: '100%',
          backgroundColor: '#ffffff',
          border: '1px solid #gray',
          borderRadius: '4px',
          color: 'gray',
        }}
        dropdownStyle={{
          backgroundColor: '#ffffff',
          borderColor: '#gray',
        }}
        buttonStyle={{
          backgroundColor: '#ffffff',
          borderColor: '#gray',
        }}
        containerClass="text-black"
      />
    </div>
  );
};

export default PhoneField;
