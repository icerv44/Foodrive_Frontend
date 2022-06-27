import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import ButtonBack from "../../components/button/ButtonBack";
import CardCustomerOrder from "../../components/card/CardCustomerOrder";

function confirmOrderPage() {
  const orderNumber = 10;
  const data = [
    {
      img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
      menuTitle: "ไก่ไม่มีกระดูก",
      menuQuantity: 2,
      menuPrice: 45,
      commentMenu: "ขอซอสเพิ่มครับ",
    },
    {
      img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
      menuTitle: "Test",
      menuQuantity: 2,
      menuPrice: 45,
    },
    {
      img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
      menuTitle: "Test3",
      menuQuantity: 1,
      menuPrice: 50,
      commentMenu: "ขอซอสเพิ่มครับ sdfyuilkmnbvfder tyuikjbvcxdftyuikl,",
    },
    {
      img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
      menuTitle: "Test3",
      menuQuantity: 1,
      menuPrice: 50,
      commentMenu:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam blanditiis odit optio in ad. Nobis ex expedita reprehenderit obcaecati qui rerum quisquam soluta, explicabo magnam dolore, incidunt odit voluptatem? Harum provident beatae, a sed, cumque dolorum odio sapiente numquam quod odit voluptate? Consectetur laudantium praesentium voluptatem, sint fugiat aliquid.",
    },
    {
      img: "https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png",
      menuTitle: "Test3",
      menuQuantity: 1,
      menuPrice: 50,
      commentMenu: "uygghjiuhgbniugbjuygbyg1234567890uygghjiuhgbniugbjuygbyg",
    },
  ];

  console.log(
    "uygghjiuhgbniugbjuygbyg1234567 890uygghjiuhgbniugbjuygbyg".length
  );

  return (
    <Box sx={{ overflow: "scroll", marginBottom: "150px" }}>
      <ButtonBack />
      <Box className="flex flex-col gap-2 py-3 mt-24 pl-10">
        <span className=" text-[25px] font-bold ">หมายเลขการสั่งซื้อ</span>
        <span className=" text-[30px] font-bold text-green">
          No. {orderNumber}
        </span>
        <Typography fontSize={16}>รายละเอียดออเดอร์จัดส่งให้ลูกค้า</Typography>
      </Box>

      <Box className="flex flex-col items-center">
        {data.map((el, idx) => (
          <CardCustomerOrder
            key={idx}
            img={el.img}
            menuTitle={el.menuTitle}
            menuQuantity={el.menuQuantity}
            menuPrice={el.menuPrice}
            commentMenu={el.commentMenu}
          />
        ))}
      </Box>
    </Box>
  );
}

export default confirmOrderPage;
