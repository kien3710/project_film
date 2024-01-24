import "./profile.css";
import { AiOutlineUser } from "react-icons/ai";
const Profile = () => {
  return (
    <div className="profile py-[100px] ">
      <div className="profile_box flex justify-between items-center">
        <ul className="sidebar">
          <li>
            <AiOutlineUser />
          </li>
        </ul>
        <div className="content">
          <div class="grid grid-cols-2 gap-4">
            <div class="...">
              <div className="textInputWrapper">
                <input
                  placeholder="Type Here"
                  type="text"
                  className="textInput"
                />
              </div>
            </div>
            <div class="...">
              <div className="textInputWrapper">
                <input
                  placeholder="Type Here"
                  type="text"
                  className="textInput"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
