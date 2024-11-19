import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
const MyProfile = () => {
  return (
    <div>
      <Helmet>
        <title>My Profile | Lingo Bingo</title>
      </Helmet>
      <Outlet></Outlet>
    </div>
  );
};

export default MyProfile;
