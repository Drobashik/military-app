import { useContext } from "react";
import { MilitaryHeadPanel } from "../MilitaryHeadPanel";
import { MilitaryItem } from "../MilitaryItem";
import { MilitaryContext } from "../../context/military-context";

export const Container = () => {
  const { militaries } = useContext(MilitaryContext) ?? {};

  return (
    <div className="container">
      <MilitaryHeadPanel />
      {militaries?.map((military) => (
        <MilitaryItem key={military.name} {...military} />
      ))}
    </div>
  );
};
