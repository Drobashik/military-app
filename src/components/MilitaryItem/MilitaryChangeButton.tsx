import { FunctionComponent, useContext, useState } from "react";
import { Button } from "../shared/Button";
import { MilitaryFormDialog } from "../MilitaryFormDialog";
import { MilitaryType } from "../../models/types/Military.type";
import { Dialog } from "../shared/Dialog";
import { MilitaryContext } from "../../context/military-context";
import { updateMilitaryInLocalStorage } from "../../helpers";

type Props = {
  military: MilitaryType;
};

export const MilitaryChangeButton: FunctionComponent<Props> = ({
  military,
}) => {
  const [isOpen, setOpen] = useState(false);

  const { setMilitaries } = useContext(MilitaryContext) ?? {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMilitaryChange = (changedMilitary: MilitaryType) => {
    setMilitaries?.((prev) => {
      const index = prev.findIndex((item) => item.name === military.name);

      prev[index] = changedMilitary;

      updateMilitaryInLocalStorage(prev);

      return [...prev];
    });
  };

  return (
    <div className="military-change-button">
      <Button onClick={handleOpen}>Change</Button>

      <Dialog
        title="Change military equipment"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <MilitaryFormDialog
          submitLabel="Change"
          militaryInitial={military}
          onMilitaryChange={handleMilitaryChange}
          onClose={handleClose}
        />
      </Dialog>
    </div>
  );
};
