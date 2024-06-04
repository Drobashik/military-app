import { MilitaryType } from "../models/types/Military.type";

const { format } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const formatPrice = (price: number) => {
  return format(price).replace(/,/g, " ");
};

export const updateMilitaryInLocalStorage = (militaries: MilitaryType[]) => {
  localStorage.setItem("military", JSON.stringify(militaries));
};
