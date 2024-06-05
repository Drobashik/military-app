import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";
import { InputText } from "../shared/Input";
import { useDebounce } from "../../hooks/useDebounce";
import { formatPrice } from "../../helpers";
import { MilitaryType } from "../../models/types/Military.type";

type Props = {
  militaryInitial: MilitaryType;
  submitLabel: string;
  onClose: () => void;
  onMilitariesSubmit: (military: MilitaryType) => void;
};

export const MilitaryFormDialog: FunctionComponent<Props> = ({
  onClose,
  onMilitariesSubmit,
  submitLabel,
  militaryInitial,
}) => {
  const [military, setMilitary] = useState(militaryInitial);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMilitary((prev) => {
      const changedMilitary = {
        ...prev,
        [event.target.name]:
          event.target.id === "digit"
            ? Number(event.target.value.replace(/\D/g, ""))
            : event.target.value,
      };

      return {
        ...changedMilitary,
        total: changedMilitary.price * changedMilitary.quantity,
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onMilitariesSubmit(military);

    if (Object.values(militaryInitial).every((value) => !value)) {
      setMilitary(militaryInitial);
    }

    onClose();
  };

  const handleCancel = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onClose();
  };

  const debouncedSrc = useDebounce(military.image, 1000);

  return (
    <form className="military-form-dialog" onSubmit={handleSubmit}>
      <div className="military-form-dialog_main">
        <Icon isLabel src={debouncedSrc} />
        <div className="military-form-dialog_fields">
          <InputText
            labelText="Name"
            name="name"
            value={military.name}
            onChange={handleInputChange}
          />
          <InputText
            labelText="Image"
            name="image"
            value={military.image}
            onChange={handleInputChange}
          />
          <div className="military-form-dialog_pricing-details">
            <InputText
              labelText="Price"
              name="price"
              id="digit"
              value={formatPrice(military.price)}
              onChange={handleInputChange}
            />
            <InputText
              labelText="Quantity"
              name="quantity"
              id="digit"
              value={military.quantity}
              onChange={handleInputChange}
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
