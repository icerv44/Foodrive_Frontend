import defaultPic from "../../assets/images/people-default.jpg";

function ProfileImg({ src, onClick }) {
  return (
    <>
      <img
        onClick={onClick}
        src={src || defaultPic}
        alt=""
        className="rounded-full w-36 h-full mx-auto"
      />
    </>
  );
}

export default ProfileImg;
