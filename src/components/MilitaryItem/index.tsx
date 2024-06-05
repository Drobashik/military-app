import { FunctionComponent, useContext } from "react";
import { MilitaryDescription } from "./MilitaryDescription";
import { Button } from "../shared/Button";
import { MilitaryType } from "../../models/types/Military.type";
import { MilitaryContext } from "../../context/military-context";
import { MilitaryChangeButton } from "./MilitaryChangeButton";

type Props = MilitaryType;

export const MilitaryItem: FunctionComponent<Props> = ({
  name,
  image,
  ...restProps
}) => {
  const { setMilitaries } = useContext(MilitaryContext) ?? {};

  const handleRemove = () => {
    setMilitaries?.((prev) =>
      prev.filter((military) => military.name !== name)
    );
  };

  const handleChange = (changedMilitary: MilitaryType) => {
    setMilitaries?.((prev) =>
      prev.map((item) => (item.name === name ? changedMilitary : item))
    );
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
        <MilitaryChangeButton
          military={{ name, image, ...restProps }}
          onMilitaryChange={handleChange}
        />
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </div>
  );
};
