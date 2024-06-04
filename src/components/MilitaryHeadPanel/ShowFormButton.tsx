import { FunctionComponent, useContext, useState } from "react";
import { Button } from "../shared/Button";
import { Dialog } from "../shared/Dialog";
import { MilitaryFormDialog } from "../MilitaryFormDialog";
import { MilitaryContext } from "../../context/military-context";
import { updateMilitaryInLocalStorage } from "../../helpers";
import { MilitaryType } from "../../models/types/Military.type";

export const ShowFormButton: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const { setMilitaries } = useContext(MilitaryContext) ?? {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMilitaryChange = (military: MilitaryType) => {
    setMilitaries?.((prev) => {
      const militaries = [...prev, military];

      updateMilitaryInLocalStorage(militaries);

      return militaries;
    });
  };

  return (
    <div className="show-form-button">
      <Button onClick={handleOpen}>Add military equipment</Button>

      <Dialog
        title="Add military equipment"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <MilitaryFormDialog
          submitLabel="Add"
          onMilitaryChange={handleMilitaryChange}
          onClose={handleClose}
        />
      </Dialog>
    </div>
  );
};
