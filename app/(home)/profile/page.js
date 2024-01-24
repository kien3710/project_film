import "./profile.css";
import { AiOutlineUser } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="profile py-[100px] ">
      <div className="profile_box flex justify-between items-center">
        <ul className="sidebar flex flex-col justify-between items-center ">
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <AiOutlineUser />
          </li>
        </ul>
        <div className="content ">
          <div className="grid grid-cols-2 gap-4">
            <div className="...">
              <div className="input_profile flex flex-col mb-[30px]">
                <label>USER NAME</label>
                <input type="text" placeholder="user name" />
              </div>
              <div className="input_profile flex flex-col mb-[30px]">
                <label>EMAIL</label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input_profile flex flex-col mb-[30px]">
                <label>PASSWORD</label>
                <input type="text" placeholder="Password" />
              </div>
              <div className="input_profile flex flex-col mb-[30px]">
                <label>LOCATION</label>
                <input type="text" placeholder="Location" />
              </div>
              <div className="input_profile flex flex-col mb-[30px]">
                <label>PHONE</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            <div className="uploadImage flex justify-center">
              <div className="upload">
                <label for="fileInput" id="customFileLabel">
                  <CiCamera className="icon_upload " />
                </label>
                <input type="file" id="fileInput" />
              </div>
            </div>
          </div>
          <div className="btn_profile">
            <button>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
