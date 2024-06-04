import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";
import { InputText } from "../shared/Input";
import { useDebounce } from "../../hooks/useDebounce";
import { formatPrice } from "../../helpers";
import { MilitaryType } from "../../models/types/Military.type";

type Props = {
  militaryInitial?: MilitaryType;
  submitLabel: string;
  onClose: () => void;
  onMilitaryChange: (military: MilitaryType) => void;
};

export const MilitaryFormDialog: FunctionComponent<Props> = ({
  onClose,
  onMilitaryChange,
  submitLabel,
  militaryInitial = {
    image: "",
    name: "",
    price: 0,
    quantity: 0,
    total: 0,
  },
}) => {
  const [military, setMilitary] = useState(militaryInitial);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = "";

    switch (event.target.id) {
      case "digit":
        value = Number(event.target.value.replace(/\D/g, ""));
        break;
      default:
        value = event.target.value;
    }

    setMilitary((prev) => ({
      ...prev,
      [event.target.name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onMilitaryChange(military);

    setMilitary(militaryInitial);

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const debouncedSrc = useDebounce(military.image, 1000);

  useEffect(() => {
    setMilitary(militaryInitial);
  }, [...Object.values(militaryInitial)]);

  useEffect(() => {
    setMilitary((prev) => ({ ...prev, total: prev.price * prev.quantity }));
  }, [military.price, military.quantity]);

  return (
    <form className="military-form-dialog" onSubmit={handleSubmit}>
      <div className="military-form-dialog_main">
        <Icon isLabel src={debouncedSrc} />
        <div className="military-form-dialog_fields">
          <InputText
            labelText="Image"
            name="image"
            value={military.image}
            onChange={handleChange}
          />
          <InputText
            labelText="Name"
            name="name"
            value={military.name}
            onChange={handleChange}
          />
          <div className="military-form-dialog_pricing-details">
            <InputText
              labelText="Price"
              name="price"
              id="digit"
              value={formatPrice(military.price)}
              onChange={handleChange}
            />
            <InputText
              labelText="Quantity"
              name="quantity"
              id="digit"
              value={military.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <footer className="military-form-dialog_footer">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit">{submitLabel}</Button>
      </footer>
    </form>
  );
};
