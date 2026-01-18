import { useContext } from "react";
import UserContent from "./ UserContext";


 const UserDetails = () => {
  const userData = useContext(UserContent);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserDetails;