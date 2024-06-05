import { FunctionComponent, useState } from "react";
import { Button } from "../shared/Button";
import { MilitaryFormDialog } from "../MilitaryFormDialog";
import { MilitaryType } from "../../models/types/Military.type";
import { Dialog } from "../shared/Dialog";

type Props = {
  military: MilitaryType;
  onMilitaryChange: (military: MilitaryType) => void;
};

export const MilitaryChangeButton: FunctionComponent<Props> = ({
  military,
  onMilitaryChange,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          onClose={handleClose}
          onMilitariesSubmit={onMilitaryChange}
          militaryInitial={military}
        />
      </Dialog>
    </div>
  );
};
