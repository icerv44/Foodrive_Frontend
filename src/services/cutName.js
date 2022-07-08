export const cutLetter = (name, numberCut) => {
  if (name?.length > numberCut) {
    const cutName = name?.substring(0, numberCut) + "...";
    return cutName;
  } else return name;
};
