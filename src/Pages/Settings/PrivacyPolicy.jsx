import React, { useState } from 'react';
import { 
  FiArrowLeft, FiUploadCloud, 
  FiBold, FiItalic, FiUnderline, 
  FiAlignLeft, FiAlignCenter, FiAlignRight, 
  FiLink, FiImage 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(`molestie maecenas. Leo blandit ac porttitor rutrum aliquet porta penatibus mi est. Nisl velit vel lacus nulla eu netus pretium. Pellentesque scelerisque tellus nisl eu nisl sed senectus nunc. Porta sollicitudin vel elit varius nulla sit diam sed. Bibendum elit facilisi nulla viverra augue pellentesque gravida morbi.

Diam pellentesque orci eget gravida cursus. Ut ut nulla sapien eget vitae at eget pretium. Tristique nibh ipsum iaculis quam. Vestibulum magna cursus facilisis adipiscing cras dui. Risus auctor faucibus orci tortor tristique elit. Sit tincidunt id felis malesuada placerat ultricies enim. Purus ut congue ornare id sed. Enim libero tincidunt facilisis non facilisis mattis praesent. Magna volutpat at cras urna adipiscing vitae velit enim volutpat. Ac tincidunt et sed dolor ipsum. Purus nunc turpis scelerisque pellentesque lectus mauris imperdiet. Turpis orci consectetur enim posuere faucibus praesent.

Ut suscipit cursus id mauris. Accumsan egestas sit arcu sed. Feugiat tortor pharetra id ipsum elit diam viverra tortor. Mattis tincidunt eget ut nunc in. Mauris ipsum ut purus laoreet nisi eu viverra velit adipiscing. Diam sit cursus id semper sit. Urna morbi nisl est vel tincidunt. Egestas feugiat volutpat.`);

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-fit flex flex-col min-h-[600px]">
        {/* Header */}
        <div className="bg-[#002B49] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate(-1)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FiArrowLeft size={20} />
            </button>
            <h2 className="text-white text-[20px] font-bold tracking-wide">Privacy Policy</h2>
          </div>
          <button className="bg-white text-[#002B49] font-bold text-[13px] px-6 py-1.5 rounded-sm hover:bg-gray-100 transition-colors">
            Save
          </button>
        </div>

        {/* Editor Area */}
        <div className="flex flex-col flex-1 p-6 relative">
          
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[350px] outline-none text-[14px] text-gray-600 leading-relaxed resize-none mb-20"
          />

          {/* Bottom Toolbar Area */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pt-4 bg-white">
            
            {/* Upload Section */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <FiUploadCloud size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#333]">Upload your image</span>
                <span className="text-[11px] text-gray-400">jpg/png - Max. 5MB</span>
              </div>
              <button className="bg-[#002B49] text-white text-[12px] font-bold px-4 py-1.5 rounded-sm hover:bg-[#002B49]/90 transition-colors ml-2">
                Upload
              </button>
            </div>

            {/* Rich Text Toolbar Options */}
            <div className="flex items-center gap-1">
              <select className="border border-gray-200 rounded px-1 py-1 text-[12px] outline-none mr-2 bg-white text-gray-600">
                <option>12</option>
                <option>14</option>
                <option>16</option>
              </select>
              
              <div className="flex items-center bg-white border border-gray-200 rounded overflow-hidden">
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-200"><FiBold size={14} /></button>
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-200"><FiItalic size={14} /></button>
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100"><FiUnderline size={14} /></button>
              </div>

              <div className="flex items-center bg-white border border-gray-200 rounded overflow-hidden ml-2">
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-200"><FiAlignLeft size={14} /></button>
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-200"><FiAlignCenter size={14} /></button>
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100"><FiAlignRight size={14} /></button>
              </div>
              
              <div className="flex items-center bg-white border border-gray-200 rounded overflow-hidden ml-2">
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100 border-r border-gray-200"><FiLink size={14} /></button>
                <button className="px-2 py-1.5 text-gray-600 hover:bg-gray-100"><FiImage size={14} /></button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
