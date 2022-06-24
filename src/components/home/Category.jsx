import React from "react";
import CardHome from "../button/CardHome";

function Category() {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night view",
      description: "4.21M views",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake view",
      description: "4.74M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night view",
      description: "4.21M views",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake view",
      description: "4.74M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          mx: 3,
          mt: 3,
          display: "flex",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        อาหารยุโรป
        {/* {item.title} */}
      </Typography>
      <Box
        sx={{
          px: 3,
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: 370,
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item) => (
          <CardHome item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Category;
