import { FunctionComponent, useContext, useEffect, useState } from "react";
import { formatPrice } from "../../helpers";
import { MilitaryContext } from "../../context/military-context";

const TOTAL_BALANCE = 49000000000;

export const TotalBalance: FunctionComponent = () => {
  const { militaries } = useContext(MilitaryContext) ?? {};
  const [currentBalance, setCurrentBalance] = useState(TOTAL_BALANCE);

  useEffect(() => {
    setCurrentBalance(
      militaries?.reduce(
        (acc, military) => acc - military.total,
        TOTAL_BALANCE
      ) ?? TOTAL_BALANCE
    );
  }, [militaries]);

  return (
    <div className="total-balance">
      <span>Initial balance: {formatPrice(TOTAL_BALANCE)}</span>
      <span>Current balance: {formatPrice(currentBalance)}</span>
    </div>
  );
};
