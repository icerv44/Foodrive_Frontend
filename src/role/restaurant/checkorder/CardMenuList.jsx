function CardMenuList({ src, name, price }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between px-2 font-semibold text-xl">
        <div>{name}</div>
        <div>{price.toFixed(2)} ฿</div>
      </div>
      <div className="h-60 w-60 mx-auto">
        <img src={src} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default CardMenuList;
