import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import CardCustomerOrder from "../../components/card/CardCustomerOrder";
import { useDelivery } from "../../contexts/DeliveryContext";

function confirmOrderPage() {
  const { order, setPlace } = useDelivery();
  const orderNumber = 10;
  const data = [
    order,
    // {
    //   img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
    //   menuTitle: "ไก่ไม่มีกระดูก",
    //   menuQuantity: 2,
    //   menuPrice: 45,
    //   commentMenu: "ขอซอสเพิ่มครับ",
    // },
    // {
    //   img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
    //   menuTitle: "Test",
    //   menuQuantity: 2,
    //   menuPrice: 455,
    // },
    // {
    //   img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
    //   menuTitle: "Test3",
    //   menuQuantity: 1,
    //   menuPrice: 50,
    //   commentMenu: "ขอซอสเพิ่มครับ sdfyuilkmnbvfder tyuikjbvcxdftyuikl,",
    // },
    // {
    //   img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
    //   menuTitle: "Test3",
    //   menuQuantity: 1,
    //   menuPrice: 50,
    //   commentMenu:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam blanditiis odit optio in ad. Nobis ex expedita reprehenderit obcaecati qui rerum quisquam soluta, explicabo magnam dolore, incidunt odit voluptatem? Harum provident beatae, a sed, cumque dolorum odio sapiente numquam quod odit voluptate? Consectetur laudantium praesentium voluptatem, sint fugiat aliquid.",
    // },
    // {
    //   img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
    //   menuTitle: "Test3",
    //   menuQuantity: 1,
    //   menuPrice: 1050,
    //   commentMenu: "uygghjiuhgbniugbjuygbyg1234567890uygghjiuhgbniugbjuygbyg",
    // },
  ];

  console.log("confirmOrderPage : ", order.OrderMenus);

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
          No. {order.id}
        </span>
        <Typography fontSize={16}>รายละเอียดออเดอร์จัดส่งให้ลูกค้า</Typography>
      </Box>

      <Box className="flex flex-col items-center">
        {order.OrderMenus.map((el, idx) => (
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
