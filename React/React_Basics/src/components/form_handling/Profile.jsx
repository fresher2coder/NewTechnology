import React, { useState } from "react";
import { v4 as generateID } from "uuid";
import ProfileForm from "./ProfileForm";
import ListCard from "../list_rendering/ListCard";

function Profile() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: generateID() };
    setProfiles((prevProfiles) => [...prevProfiles, updatedProfile]);
    console.log(profiles);
  };
  return (
    <>
      <ProfileForm addProfile={addProfile} />
      <div className="profile-card">
        {profiles.map((profile) => (
          <ListCard key={profile.id} id={profile.id} data={profile} />
        ))}
      </div>
    </>
  );
}

export default Profile;
