import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Upload, Image as ImageIcon } from 'lucide-react';

const defaultAvatars = [
    '/avatars/avatar1.jpeg',
    '/avatars/avatar2.jpeg',
    '/avatars/avatar3.jpeg',
    '/avatars/avatar4.jpeg',
];

const Profile = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Load from localStorage or fallback
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  React.useEffect(() => {
    setFirstName(localStorage.getItem('firstName') || '');
    setLastName(localStorage.getItem('lastName') || '');
    setEmail(localStorage.getItem('email') || '');
    setPhone(localStorage.getItem('phone') || '');
  }, []);
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || '');
  const [selectedTab, setSelectedTab] = useState('upload');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setAvatar(''); // Clear avatar if uploading
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (avatarUrl) => {
    setAvatar(avatarUrl);
    setProfilePic(''); // Clear uploaded photo if selecting avatar
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    if (profilePic) {
      localStorage.setItem('profilePic', profilePic);
      localStorage.removeItem('avatar');
    } else if (avatar) {
      localStorage.setItem('avatar', avatar);
      localStorage.removeItem('profilePic');
    }
    window.dispatchEvent(new Event('userProfileUpdated'));
    setSuccessMsg('Profile updated!');
    setTimeout(() => setSuccessMsg(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-32 pb-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Profile</h2>
        {successMsg && <div className="mb-4 text-green-600 text-center font-semibold">{successMsg}</div>}
        <form onSubmit={handleSave}>
          <div className="flex flex-col items-center mb-6">
            {/* Profile Picture Preview */}
            <div className="relative mb-3">
              <img
                src={profilePic || avatar || '/avatars/default-user.png'}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-red-400 shadow"
                onError={e => e.target.src='/avatars/default-user.png'}
              />
            </div>
            {/* Upload/Avatar Tabs */}
            <div className="flex space-x-2 mb-4">
              <button
                type="button"
                className={`px-3 py-1 rounded ${selectedTab === 'upload' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedTab('upload')}
              >
                Upload Photo
              </button>
              <button
                type="button"
                className={`px-3 py-1 rounded ${selectedTab === 'avatar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedTab('avatar')}
              >
                Choose Avatar
              </button>
            </div>
            {/* Conditional Section */}
            {selectedTab === 'upload' && (
              <div className="mb-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="bg-red-600 p-2 rounded-full border-2 border-white hover:bg-red-700"
                  title="Upload Photo"
                >
                  <Upload className="h-5 w-5 text-white" />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                />
              </div>
            )}
            {selectedTab === 'avatar' && (
              <div className="flex space-x-2 mb-2">
                {defaultAvatars.map((url) => (
                  <button
                    type="button"
                    key={url}
                    className={`rounded-full border-2 ${avatar === url ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => handleAvatarSelect(url)}
                  >
                    <img src={url} alt="avatar" className="w-10 h-10 rounded-full object-cover" onError={e => e.target.src='/avatars/default-user.png'} />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="First name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
