import React, { useRef, useState } from "react";
import { Camera } from "lucide-react";
import defaultProfile from "../assets/images/defaultProfile.png";

const Profile = ({ userData }) => {
  const [profilePic, setProfilePic] = useState(defaultProfile);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setProfilePic(imageUrl);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[250px] h-[533px] border border-gray-400 bg-white flex flex-col overflow-y-auto">
        
        <header className="w-full shadow px-4 py-2">
          <h1 className="text-sm font-semibold text-gray-800">Account Settings</h1>
        </header>

        <main className="flex-1">
          <div className="flex items-center gap-3 p-4">
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 bg-purple-800 text-white p-1 rounded-full"
              >
                <Camera size={14} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {userData?.fullname || "Marry Doe"}
              </h2>
              <p className="text-xs text-gray-500">
                {userData?.email || "marry@gmail.com"}
              </p>
            </div>
          </div>

          <div className="px-4 mt-2 text-sm text-gray-600 text-center">
            <p className="line-clamp-3">
              Welcome to your profile! You can upload a new photo or edit your
              account information here.
            </p>
            <div className="mt-3 w-full border-t border-dashed border-gray-400"></div>
          </div>
        </main>

        <footer className="w-full border-t border-dashed border-gray-400 text-center py-2 text-xs text-gray-500" />
      </div>
    </div>
  );
};

export default Profile;
