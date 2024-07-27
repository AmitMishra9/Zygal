import React, { useState, useRef } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex justify-center mb-6">
        <img
          src={avatar || "https://via.placeholder.com/100"}
          alt="Avatar"
          className="w-24 h-24 rounded-full cursor-pointer md:w-32 md:h-32 lg:w-40 lg:h-40 corsoer-"
          onClick={handleAvatarClick}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">Login</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 border-2 ${
            email
              ? validateEmail(email)
                ? 'border-green-400'
                : 'border-red-400'
              : 'border-purple-200'
          } rounded-full text-purple-700 placeholder-purple-300  focus:outline-none focus:ring-2    transition duration-200`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className={`w-full p-3 border-2 ${
            password
              ? validatePassword(password)
                ? 'border-green-400'
                : 'border-red-400'
              : 'border-purple-200'
          } rounded-full text-purple-700 placeholder-purple-300  transition duration-200 focus:outline-none focus:ring-2 `}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300">
        Login
      </button>
    </div>
  );
};

export default Form;
