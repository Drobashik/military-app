import { ButtonHTMLAttributes, FunctionComponent } from "react";
import classNames from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: string;
};

export const Button: FunctionComponent<Props> = ({
  className,
  buttonType = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={classNames("button", `button-${buttonType}`, className)}
      {...props}
    >
      {children}
    </button>
  );
};
