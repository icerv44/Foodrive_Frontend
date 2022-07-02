import { Box, Typography } from "@mui/material";
import FoodOption from "./FoodOption";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import IconButton from "@mui/joy/IconButton";
import { useCustomer } from "../../../contexts/CustomerContext";

function FoodDetail() {
  const { menu, addToCart, setAddToCart, createCart } = useCustomer();
  const [count, setCount] = useState(1);
  const [menuOptionGroup, setMenuOptionGroup] = useState([]);
  const [menuOption, setMenuOption] = useState([]);
  const [total, setTotal] = useState(0);

  const restaurantId = menu?.restaurantId;
  console.log("menuById", menu);

  const keys = menuOptionGroup.map((e) => {
    // setMenuOption({ test: e.name });
    return e.name;
    // setMenuOption(element=> {...element, })
  });

  // Menu option groups clone from  api
  useEffect(() => {
    const defaultOptionArr = [];
    const myMenuOptionGroup = menu?.MenuOptionGroups.reduce((a, c) => {
      const currentMenuOptionGroup = {
        id: c.id,
        options: [],
        name: c.name,
        MenuOptions: c.MenuOptions,
        status: c.status,
      };
      a.push(currentMenuOptionGroup);

      // ////////////
      const defaultObjectOption = {};
      defaultObjectOption.id = c.id;
      defaultObjectOption.options = [{ id: c.MenuOptions[0].id }];
      defaultOptionArr.push(defaultObjectOption);
      return a;
    }, []);
    setMenuOptionGroup(myMenuOptionGroup);
    setMenuOption(defaultOptionArr);
  }, []);

  const handleOptionChange = (e, parentid) => {
    //  1. Clone old menu
    //  2. find Object ===> id : optionsGroup (Size,flavor)
    //  2.1 if have ==> replace new options
    //  2.2 if dont have ==> push
    //  3 Set new State
    const newMenuOption = [...menuOption];
    const matchIndex = newMenuOption.findIndex((el) => el.id == parentid);

    const newOption = {
      id: parentid,
      options: [{ id: e.target.value }],
    };
    if (matchIndex !== -1) {
      newMenuOption.splice(matchIndex, 1, newOption);
    } else {
      newMenuOption.push(newOption);
    }

    setMenuOption(newMenuOption);
  };

  const handleAddToCart = async () => {
    // CART === MENUS
    // clean option group, send only api require
    const cleanMenuOptionGroup = menuOptionGroup.reduce((a, c) => {
      const currentOptionGroup = { id: c.id, options: menuOption };
      a.push(currentOptionGroup);
      return a;
    }, []);

    // New menu
    const newOrder = {
      id: menu?.id,
      optionGroups: cleanMenuOptionGroup,
    };

    // put new menu to cart
    const newCart = [...addToCart, newOrder];
    setAddToCart(newCart);

    await createCart({
      restaurantId,
      menus: addToCart,
    });
  };

  const handleClickIncreaseAmount = () => {
    if (count <= 8) {
      setCount(count + 1);
    }
  };
  const handleClickDecreaseAmount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box>
      <Box className="mx-6 mt-5 overflow-auto h-[26vh]">
        <Box className="flex justify-between items-center my-5">
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            {menu?.name}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
            {menu?.price} ฿
          </Typography>
        </Box>

        {menuOptionGroup.map(
          (el, idx) =>
            el?.status === "ACTIVE" && (
              <FoodOption
                el={el}
                parentid={el?.id}
                key={el?.id}
                name={el?.name}
                MenuOptions={el?.MenuOptions}
                onChange={handleOptionChange}
              />
            )
        )}
      </Box>

      <Box>
        <Box className="my-4">
          {/* BTN - Decrease */}
          <Box className="flex justify-center items-center gap-3">
            <IconButton
              sx={{ bgcolor: "#f9a94d22", color: "green" }}
              onClick={handleClickDecreaseAmount}
            >
              <AiOutlineMinus />
            </IconButton>

            <Box className="font-semibold">{count}</Box>

            {/* BTN - Increase */}
            <IconButton
              sx={{
                background:
                  "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
                color: "white",
              }}
              onClick={handleClickIncreaseAmount}
            >
              <AiOutlinePlus className="font-semibold text-lg" />
            </IconButton>
          </Box>
        </Box>

        <Box className="text-center my-4">
          <ButtonGreenGradiant
            title="Add to Cart"
            px="115px"
            onClick={handleAddToCart}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default FoodDetail;
