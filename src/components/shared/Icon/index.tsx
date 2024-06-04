import classNames from "classnames";
import { FunctionComponent, ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt"> & {
  isLabel?: boolean;
};

const labelSrc =
  "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png";

export const Icon: FunctionComponent<Props> = ({
  className,
  isLabel,
  src,
  ...restProps
}) => {
  if (isLabel) {
    return (
      <img
        {...restProps}
        className={classNames("icon-label", className)}
        src={src || labelSrc}
        alt="Label"
      />
    );
  }

  return (
    <img
      {...restProps}
      src={src}
      className={classNames("icon", className)}
      alt="Icon"
    />
  );
};
