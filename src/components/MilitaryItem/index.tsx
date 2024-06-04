import { FunctionComponent, useContext } from "react";
import { MilitaryDescription } from "./MilitaryDescription";
import { Button } from "../shared/Button";
import { MilitaryType } from "../../models/types/Military.type";
import { MilitaryContext } from "../../context/military-context";
import { updateMilitaryInLocalStorage } from "../../helpers";
import { MilitaryChangeButton } from "./MilitaryChangeButton";

type Props = MilitaryType;

export const MilitaryItem: FunctionComponent<Props> = ({
  name,
  image,
  ...restProps
}) => {
  const { setMilitaries } = useContext(MilitaryContext) ?? {};

  const handleRemove = () => {
    setMilitaries?.((prev) => {
      const filtered = prev.filter((military) => military.name !== name);

      updateMilitaryInLocalStorage(filtered);

      return filtered;
    });
  };

  return (
    <div className="military-item">
      <div className="military-item_image">
        <img className="military-image" src={image} alt={name} />
      </div>
      <div className="military-item_name">
        <h1>{name}</h1>
      </div>
      <div className="military-item_description">
        <MilitaryDescription {...restProps} />
      </div>
      <div className="military-item_control">
        <MilitaryChangeButton military={{ name, image, ...restProps }} />
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </div>
  );
};
