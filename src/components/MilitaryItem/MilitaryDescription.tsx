import { FunctionComponent } from "react";
import { Icon } from "../shared/Icon";
import { formatPrice } from "../../helpers";

type Props = {
  price: number;
  quantity: number;
  total: number;
};

export const MilitaryDescription: FunctionComponent<Props> = ({
  price,
  quantity,
  total,
}) => {
  return (
    <div className="military-description">
      <div className="military-description_cost">
        <Icon src="https://cdn-icons-png.flaticon.com/512/7387/7387847.png" />
        Price: <span className="cost">{formatPrice(price)}</span>
      </div>
      <div className="military-description_quantity">
        <Icon src="https://cdn-icons-png.flaticon.com/512/3639/3639103.png" />
        Quantity: <span className="quantity">x{quantity}</span>
      </div>
      <div className="military-description_total">
        <Icon src="https://cdn-icons-png.flaticon.com/512/3037/3037156.png" />
        Total: <span className="total">{formatPrice(total)}</span>
      </div>
    </div>
  );
};
