// src/hooks/useProfile.js
import { useState, useEffect } from "react";
import ProfileService from "../services/Profile.servise";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProfileService.getProfile()
      .then((res) => {
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.error("❌ Error loading profile:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { profile, loading };
};

export default useProfile;
