import React, {ReactChild, ReactChildren} from "react";
import {Content, PopoverStyle, Title} from "./popup.style";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  placement?: any;
  title?: any;
  action?: string;
  content?: ReactChild;
}
const Popover: React.FC<AuxProps> = ({
  children,
  placement,
  title,
  action,
  content,
}) => {
  const content1 = <Content>{content}</Content>;

  return (
    <PopoverStyle
      title={title && <Title>{title}</Title>}
      content={content1}
      placement={placement}
      trigger={action}
    >
      {children}
    </PopoverStyle>
  );
};

export { Popover };
