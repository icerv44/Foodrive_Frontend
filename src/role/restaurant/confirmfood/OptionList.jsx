function OptionList({ optionName, optionPrice }) {
  return (
    <div className="flex justify-between items-center">
      <div>{optionName}</div>
      <div>{optionPrice}.00 ฿</div>
    </div>
  );
}

export default OptionList;
