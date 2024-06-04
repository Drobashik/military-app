import classNames from "classnames";
import { FunctionComponent, InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  labelText: string;
};

export const InputText: FunctionComponent<Props> = ({
  className,
  labelText,
  ...restProps
}) => {
  return (
    <label className={classNames("input-text", className)}>
      <span>{labelText}</span>
      <input {...restProps} className="input-text_input" type="text" />
    </label>
  );
};
