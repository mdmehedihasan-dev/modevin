import React, { useState, useRef } from 'react';
import { 
  FiSearch, FiSend, FiX, FiUploadCloud, FiFileText, FiTrash2,
  FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight, FiLink, FiImage, FiCode
} from 'react-icons/fi';

const usersData = [
  { id: 1, name: 'Alex Rivera', email: 'alex.r@enterprise.com', status: 'ACTIVE' },
  { id: 2, name: 'Sarah Jenkins', email: 's.jenkins@globex.co', status: 'TRIAL' },
  { id: 3, name: 'Marcus Thorne', email: 'm.thorne@startup.io', status: 'ACTIVE' },
  { id: 4, name: 'Elena Rod', email: 'elena.rod@design.co', status: 'INACTIVE' },
  { id: 5, name: 'Julian Kim', email: 'j.kim@techflow.net', status: 'ACTIVE' },
];

const BulkEmail = () => {
  const [selectedUsers, setSelectedUsers] = useState([usersData[0], usersData[2], usersData[4]]);
  const [subject, setSubject] = useState('Exciting New Updates to Your Workspace');
  const [template, setTemplate] = useState('Monthly Product Update');
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);
  
  const handleSelectUser = (user) => {
    if (selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(usersData);
    } else {
      setSelectedUsers([]);
    }
  };

  const removeUser = (id) => {
    setSelectedUsers(selectedUsers.filter(u => u.id !== id));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setAttachments([...attachments, ...files]);
    }
    // reset input so same file can be selected again if removed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (index) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const isAllSelected = selectedUsers.length === usersData.length && usersData.length > 0;
  const isSomeSelected = selectedUsers.length > 0 && selectedUsers.length < usersData.length;

  return (
    <div className="p-8 bg-[#fdfdfd] min-h-screen font-sans mt-16">
      
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Pane - Target Audience */}
        <div className="w-full lg:w-[40%] bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h2 className="text-[18px] font-bold text-[#001f3f] mb-4">Target Audience</h2>
          
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search users by name or email"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-[13px] text-gray-700 outline-none focus:border-[#002B49] transition-colors"
            />
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-2 w-10">
                    <input 
                      type="checkbox" 
                      checked={isAllSelected}
                      ref={input => {
                        if (input) input.indeterminate = isSomeSelected;
                      }}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded text-[#002B49] focus:ring-[#002B49] cursor-pointer"
                    />
                  </th>
                  <th className="py-3 px-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map(user => {
                  const isSelected = !!selectedUsers.find(u => u.id === user.id);
                  return (
                    <tr 
                      key={user.id} 
                      className={`border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${isSelected ? 'bg-[#f8fafc]' : ''}`}
                      onClick={() => handleSelectUser(user)}
                    >
                      <td className="py-4 px-2">
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => {}} // handled by row click
                          className="w-4 h-4 rounded text-[#002B49] focus:ring-[#002B49] cursor-pointer"
                        />
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-[13px] font-medium text-gray-700">{user.name}</div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-[13px] text-gray-500 break-all">{user.email}</div>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          user.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 
                          user.status === 'TRIAL' ? 'bg-amber-100 text-amber-700' : 
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Pane - Compose Campaign */}
        <div className="w-full lg:w-[60%] bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-[20px] font-bold text-[#001f3f]">Compose</h2>
              <h2 className="text-[20px] font-bold text-[#001f3f]">Campaign</h2>
            </div>
            <button className="bg-[#002B49] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#002B49]/90 text-[14px] font-bold transition-colors shadow-sm">
              <FiSend size={16} /> Send Email
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {/* Recipients */}
            <div>
              <label className="block text-[13px] text-gray-600 font-medium mb-2">Recipients ({selectedUsers.length} selected)</label>
              <div className="w-full min-h-[46px] bg-[#f8fafc] border border-gray-200 rounded-lg p-2 flex flex-wrap gap-2">
                {selectedUsers.map(user => (
                  <div key={user.id} className="bg-white border border-gray-200 rounded-md px-3 py-1 flex items-center gap-2 shadow-sm">
                    <span className="text-[13px] font-medium text-gray-700">{user.name}</span>
                    <button 
                      onClick={() => removeUser(user.id)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Select Template */}
            <div>
              <label className="block text-[13px] text-gray-600 font-medium mb-2">Select Template</label>
              <select 
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-800 outline-none focus:border-[#002B49] transition-colors appearance-none"
              >
                <option value="Monthly Product Update">Monthly Product Update</option>
                <option value="Welcome Email">Welcome Email</option>
                <option value="Promotion">Promotion</option>
              </select>
            </div>

            {/* Email Subject */}
            <div>
              <label className="block text-[13px] text-gray-600 font-medium mb-2">Email Subject</label>
              <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] font-medium text-[#001f3f] outline-none focus:border-[#002B49] transition-colors"
              />
            </div>

            {/* Email Body Editor */}
            <div>
              <label className="block text-[13px] text-gray-600 font-medium mb-2">Email Body</label>
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                {/* Toolbar */}
                <div className="bg-[#f8fafc] border-b border-gray-200 p-2 flex items-center gap-1 flex-wrap">
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiBold size={18} /></button>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiItalic size={18} /></button>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiUnderline size={18} /></button>
                  <div className="w-px h-5 bg-gray-300 mx-1"></div>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiAlignLeft size={18} /></button>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiAlignCenter size={18} /></button>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiAlignRight size={18} /></button>
                  <div className="w-px h-5 bg-gray-300 mx-1"></div>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiLink size={18} /></button>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiImage size={18} /></button>
                  <div className="flex-1"></div>
                  <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors"><FiCode size={18} /></button>
                </div>
                {/* Editor Content Area */}
                <div className="p-5 min-h-[250px] outline-none text-[14px] text-gray-700 font-sans leading-relaxed" contentEditable suppressContentEditableWarning>
                  <p className="font-bold text-[16px] text-[#001f3f] mb-4">Hi there,</p>
                  <p className="mb-4">We've been working hard to bring you a better experience. In our latest update, we've introduced several key features designed to streamline your administrative workflow:</p>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2"><strong className="text-[#001f3f]">Automated Reporting:</strong> Get insights delivered straight to your inbox every Monday.</li>
                    <li className="mb-2"><strong className="text-[#001f3f]">Smart Filters:</strong> Drill down into your user base with surgical precision.</li>
                    <li className="mb-2"><strong className="text-[#001f3f]">Performance Boost:</strong> The dashboard now loads 40% faster.</li>
                  </ul>
                  <p className="mb-6">Check out the new features today and let us know what you think!</p>
                  <p>Best regards,<br/>The Modevin Team</p>
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-[13px] text-gray-600 font-medium mb-2">Attachments</label>
              <div 
                className="w-full h-24 border-2 border-dashed border-indigo-200 bg-indigo-50/30 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50/50 transition-colors mb-4"
                onClick={() => fileInputRef.current?.click()}
              >
                <FiUploadCloud className="text-indigo-400 mb-1" size={24} />
                <span className="text-[13px] font-medium text-[#001f3f]">Click to upload or drag and drop</span>
                <span className="text-[11px] text-gray-400">PDF, JPG, PNG or ZIP (max. 10MB)</span>
                <input 
                  type="file" 
                  multiple
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
              
              {/* Attachment File List */}
              {attachments.length > 0 && (
                <div className="flex flex-col gap-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="w-max max-w-full border border-gray-200 rounded-lg p-3 flex items-center gap-3 bg-white shadow-sm">
                      <div className="w-8 h-8 rounded bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                        <FiFileText size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-[#001f3f] line-clamp-1">{file.name}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{formatFileSize(file.size)}</span>
                      </div>
                      <button 
                        onClick={() => removeAttachment(index)}
                        className="ml-4 p-1.5 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BulkEmail;
