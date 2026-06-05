import React, { useState, useRef } from 'react';
import { FiEye, FiEyeOff, FiImage, FiTrash2 } from 'react-icons/fi';

const CreateAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation(); // Prevent triggering the file input click
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-fit">
        {/* Header */}
        <div className="bg-[#002B49] px-6 py-4">
          <h2 className="text-white text-[20px] font-bold tracking-wide">Create Admin</h2>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form className="flex flex-col gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-[13px] text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Jhon doe"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#002B49] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#002B49] transition-colors"
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] text-gray-700 font-medium mb-2">New Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#002B49] transition-colors pr-10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-gray-700 font-medium mb-2">Confirm New Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#002B49] transition-colors pr-10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-[13px] text-gray-700 font-medium mb-2">Profile Image</label>
              <div 
                className="w-full h-32 bg-gray-50 border border-gray-200 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors relative overflow-hidden group"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Profile Preview" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center transition-all">
                      <span className="text-white text-[13px] font-medium mr-4">Change Image</span>
                      <button 
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-1.5 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
                        title="Remove image"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <FiImage className="text-gray-400 mb-2" size={24} />
                    <span className="text-[13px] text-gray-400 font-medium">Upload Image</span>
                  </>
                )}
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-center">
              <button 
                type="button"
                className="bg-[#002B49] text-white font-bold text-[14px] px-12 py-3 rounded-md hover:bg-[#002B49]/90 transition-colors w-full max-w-sm shadow-sm"
              >
                Create Admin
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
