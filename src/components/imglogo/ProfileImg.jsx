import defaultPic from "../../assets/images/people-default.jpg";

function ProfileImg({ src, onClick }) {
  return (
    <div className="rounded-full w-36 h-36 overflow-hidden mx-auto">
      <img
        onClick={onClick}
        src={src || defaultPic}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfileImg;
