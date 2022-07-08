import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import CardCustomerOrder from "../../components/card/CardCustomerOrder";
import { useDelivery } from "../../contexts/DeliveryContext";

function confirmOrderPage() {
  const { order, setPlace, getOrderDetailById } = useDelivery();
  const { orderId } = useParams();
  const orderNumber = 10;

  // console.log("confirmOrderPage : ", order.OrderMenus);
  useEffect(() => {
    getOrderDetailById(Number(orderId));
    try {
    } catch (err) {}
  }, [order?.id]);

  return (
    <Box sx={{ overflow: "scroll", marginBottom: "150px" }}>
      <ButtonBackNewPlus
        onClick={() => {
          window.history.back();
          setPlace("restaurant");
        }}
      />
      <Box className="flex flex-col gap-2 py-3 mt-2 pl-10">
        <span className=" text-[25px] font-bold ">หมายเลขการสั่งซื้อ</span>
        <span className=" text-[30px] font-bold text-green">
          No. {order?.id}
        </span>
        <Typography fontSize={16}>รายละเอียดออเดอร์จัดส่งให้ลูกค้า</Typography>
      </Box>

      <Box className="flex flex-col items-center">
        {order?.OrderMenus?.map((el, idx) => (
          // el.filter((el2,index)=>{}

          <CardCustomerOrder
            key={idx}
            img={el.Menu.menuImage}
            menuTitle={el.Menu.name}
            // menuQuantity={
            //   order.OrderMenus.filter((obj) => {
            //     return obj.Menu.id === el.Menu.id;
            //   }).length
            // }
            menuPrice={el.price}
            commentMenu={el.comment}
          />
        ))}
      </Box>
    </Box>
  );
}

export default confirmOrderPage;
