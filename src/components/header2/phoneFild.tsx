import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneField = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex w-full max-w-sm flex-col">
      <label className="mb-2 text-white mix-blend-difference" htmlFor="phone">
        Phone Number
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        placeholder={'Enter your phone number '}
        inputStyle={{
          width: '100%',
          backgroundColor: '#white',
          border: '1px solid #gray',
          borderRadius: '',
          color: 'gray',
          // mixBlendMode: 'color',
        }}
        dropdownStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        buttonStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        containerClass="text-black"
      />
    </div>
  );
};

export default PhoneField;
