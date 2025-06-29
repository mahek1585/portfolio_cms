


import React from "react";
import useProfile from "../../../hooks/useProfile";

const AboutHeader = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-24 text-center">
        <p className="text-lg text-gray-600">Loading profile...</p>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="py-20 px-6 md:px-24 text-center">
        <p className="text-red-500 text-lg">Failed to load profile data.</p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#F9E6F0] to-[#fdfbfb] py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#d49dbb]">
            <img
              src={profile.img_url}
              className="w-full h-full object-cover"
              alt={profile.role || "Profile"}
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-[#2d2d2d]">Mahek Shaikh</h2>
          <p className="text-[#6b7280] font-medium mt-1">
            {profile.role || "Web Developer"}
          </p>
        </div>

        {/* Bio */}
        <div className="text-[#333] max-w-2xl">
          <h3 className="text-xl font-semibold mb-4 text-[#2d2d2d]">About Me</h3>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
