import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Yuva Durga";
  const age = 21;

  return <UserInfo name={name} age={age} />;
}

export default UserProfile;
