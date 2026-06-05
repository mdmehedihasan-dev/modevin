import React, { useState, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-fit flex flex-col pb-32">
        {/* Header */}
        <div className="bg-[#002B49] px-6 py-4 flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FiArrowLeft size={20} />
          </button>
          <h2 className="text-white text-[20px] font-bold tracking-wide">Settings</h2>
        </div>

        {/* Content Container */}
        <div className="px-8 mt-12 max-w-2xl mx-auto w-full flex flex-col gap-6">
          
          <p className="text-[16px] text-[#333] font-medium leading-relaxed text-center">
            Please check your email. We have sent a code to<br/>
            contact @gmail.com
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-4 mt-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 border border-[#8da4b5] rounded-md text-center text-[24px] font-medium outline-none focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] transition-all"
              />
            ))}
          </div>

          {/* Resend Link */}
          <div className="flex justify-between items-center w-full max-w-[340px] mx-auto mt-2">
            <span className="text-[13px] text-gray-500 font-medium">Didn't receive code?</span>
            <button className="text-[#333] text-[13px] font-medium hover:underline focus:outline-none underline">
              Resend
            </button>
          </div>

          {/* Verify Button */}
          <div className="flex justify-center mt-4">
            <button className="w-full max-w-[500px] bg-[#002B49] text-white rounded-md py-3 text-[15px] font-bold hover:bg-[#002B49]/90 transition-colors shadow-sm">
              Verify
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
