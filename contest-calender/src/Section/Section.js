import React, { useState, useEffect } from "react";
import Crd from "./Crd";
const Section = ({ onLoad }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    contest();
    
  }, []);
  const contest = async () => {
    const url = "https://kontests.net/api/v1/all";
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
    
  };
  

  return (
    <div className="flex flex-row flex-wrap gap-4 px-6 justify-evenly outline-gray-900 bg-pink-100 pt-9" >
      {user.map((cont, id) => {
        return <Crd key={id} cont={cont} />;
      })}
    </div>
  );
};

export default Section;
