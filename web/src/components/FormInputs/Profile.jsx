import React, { useState } from "react";
import ListCard from "./ListCard";
import ProfileForm from "./ProfileForm";
import ProfileSearch from "./ProfileSearch";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, UserName: "URAHARA!!", password: "URAHARA!!" },
    { id: 2, UserName: "SHOYO!!", password: "SHOYO!!" },
    { id: 3, UserName: "Teja", password: "Teja" },
  ]);

  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  return (
    <>
      <ProfileForm addProfile={addProfile} />
      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
      <ProfileSearch />
    </>
  );
};

export default Profile;
