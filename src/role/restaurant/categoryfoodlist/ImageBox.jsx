import { AiOutlineCloudUpload } from "react-icons/ai";

function ImageBox() {
  return (
    <div className="flex flex-col justify-center items-center font-bold text-xl">
      <div>Upload Image</div>
      <div className="text-3xl">
        <AiOutlineCloudUpload />
      </div>
    </div>
  );
}

export default ImageBox;
