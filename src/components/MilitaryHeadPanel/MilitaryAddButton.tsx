import { FunctionComponent, useContext, useState } from "react";
import { Button } from "../shared/Button";
import { Dialog } from "../shared/Dialog";
import { MilitaryFormDialog } from "../MilitaryFormDialog";
import { MilitaryContext } from "../../context/military-context";
import { MilitaryType } from "../../models/types/Military.type";

export const MilitaryAddButton: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const { setMilitaries } = useContext(MilitaryContext) ?? {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMilitaryAdd = (military: MilitaryType) => {
    setMilitaries?.((prev) => [...prev, military]);
  };

  return (
    <div className="show-form-button">
      <Button onClick={handleOpen}>Add equipment</Button>

      <Dialog
        title="Add military equipment"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <MilitaryFormDialog
          submitLabel="Add"
          onMilitariesSubmit={handleMilitaryAdd}
          onClose={handleClose}
          militaryInitial={{
            image: "",
            name: "",
            price: 0,
            quantity: 0,
            total: 0,
          }}
        />
      </Dialog>
    </div>
  );
};
