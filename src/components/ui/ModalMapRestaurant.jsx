import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalMapRestaurant({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          borderRadius: "18px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          height: "45vh",
          width: "320px",
          position: "absolute",
          marginRight: "20px",
          top: "20%",
        },
      }}
      id="root"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <div>
        <Card
          className="shadow-lg shadow-blue-100 rounded-lg my-3 "
          sx={{
            width: "280px",
            background: "#fafdff",
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <CardContent className="flex justify-between items-center">
            <Box className="flex flex-col  gap-2">
              {/* Distance */}
              {/* <Typography
                  className="pl-10 text-20 font-bold text-gray"
                  fontSize={14}
                  // fontWeight="bold"
                >
                  far from you {distance} km.
                </Typography> */}

              {/* Restaurant address */}
              <Box className="flex items-center">
                <MdOutlineLocationOn className="text-green text-[100px]" />
                <Typography
                  //   className=" text-20 font-bold"
                  fontSize={15}
                  fontWeight="bold"
                >
                  {restaurantName}
                  <br />
                  {/* {`${Number(restaurantLatitude)} : ${restaurantLongtitude}`} */}
                  {`${resAddress} `}
                  {/* {`113 ซอย จรัสเมือง Khwaeng Rong Muang, Khet Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand`} */}
                </Typography>
                <Typography></Typography>
              </Box>
              {/* Customer address */}
              <Box className="flex items-center">
                <MdOutlineLocationOn className="text-[#FF0000] text-[100px]" />
                <Typography
                  //   className=" text-20 font-bold"
                  fontSize={15}
                  fontWeight="bold"
                >
                  {/* {`Customer Address`} <br /> */}
                  {/* {`113 ซอย จรัสเมือง Khwaeng Rong Muang, Khet Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand`} */}
                  {customerAddress}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <div className="flex items-center justify-around gap-4 font-bold mt-[15px]">
          <button
            onClick={handleClose}
            className="border rounded-xl p-3 w-full"
          >
            {`Cancel`}
          </button>

          <button
            onClick={() => handleAccepted(id, customerId, restaurantId)}
            className="bg-[#DA6317] text-white rounded-xl p-3 w-full"
          >
            {`Accepted`}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalMapRestaurant;
