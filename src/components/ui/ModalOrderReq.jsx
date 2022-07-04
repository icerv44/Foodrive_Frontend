import React from "react";

function ModalOrderReq({ id, restaurantAddress, customerAddress }) {
  const [isOpen, setIsOpen] = useState(false);
  const cutLetter = 14;
  const cutOrder = 1;

  const cutRestaurantName = (name) => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  return;
  <>
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          borderRadius: "18px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          height: "26vh",
          top: "33%",
        },
      }}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <div>
        <Card
          className="shadow-lg shadow-blue-100 rounded-lg my-3 "
          sx={{
            width: "320px",
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
              <Typography
                className="pl-10 text-20 font-bold text-gray"
                fontSize={14}
                // fontWeight="bold"
              >
                far from you {el.distance} km.
              </Typography>

              {/* Restaurant name */}
              <Box className="flex items-center">
                <MdOutlineLocationOn className="text-green text-2xl" />
                <Typography
                  //   className=" text-20 font-bold"
                  fontSize={27}
                  fontWeight="bold"
                >
                  {cutRestaurantName(el.Restaurant.name)}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <div className="flex items-center justify-around gap-4 font-bold">
          <button
            onClick={() => setIsOpen(false)}
            className="border rounded-xl p-3 w-full"
          >
            {`Cancel`}
          </button>

          <button
            // onClick={onAction}
            className="bg-[#DA6317] text-white rounded-xl p-3 w-full"
          >
            {`Accepted`}
          </button>
        </div>
      </div>
    </Modal>
  </>;
}

export default ModalOrderReq;
