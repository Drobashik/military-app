import { FunctionComponent } from "react";
import { TotalBalance } from "./TotalBalance";
import { MilitaryAddButton } from "./MilitaryAddButton";

export const MilitaryHeadPanel: FunctionComponent = () => {
  return (
    <div className="military-head-panel">
      <div className="military-head-panel_total">
        <TotalBalance />
      </div>
      <div className="military-head-panel_add">
        <MilitaryAddButton />
      </div>
    </div>
  );
};
