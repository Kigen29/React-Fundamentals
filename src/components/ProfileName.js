import './Style.css'
import React from "react";

const user = {
  name: "John Doe",
  favoriteFood: "pizza",
  picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fjohn-doe&psig=AOvVaw0slceUTL4EELzOwYTPagLI&ust=1712161488295000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICL6tv4o4UDFQAAAAAdAAAAABAE"
};


function ProfileName() {
  return (
    <div className="item">
    <h1 className="item">{user.name}</h1> 
    </div>
    );
    
}

export default ProfileName;