import React from "react";
import {InfoWraper} from "./auth-info.style";
import AuthUser from "./authUser.compoentn";

interface AuthProps {
  searchHide: boolean;
  handelSearchHide: () => void;
}

const AuthInfo: React.FC<AuthProps> = ({ searchHide, handelSearchHide }) => {
  return (
    <InfoWraper>
      {/* <div className="mobile-action">
        <a className="btn-search" onClick={handelSearchHide}>
          {searchHide ? <FiSearch size={24} /> : <FiX size={22} />}
        </a>
      </div> */}
      {/* <Notification /> */}
      {/* <Support /> */}
      <AuthUser />
    </InfoWraper>
  );
};

export default AuthInfo;
