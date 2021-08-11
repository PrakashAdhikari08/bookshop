import React, {ReactChild, ReactChildren} from "react";
import * as heading from "./Heading.styles";

interface HeadingProps {
  as: string;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  className?: string;
  id?: string;
}

const Heading: React.FC<HeadingProps> = ({ as, children, className, id }) => {
  //@ts-ignore
  const StyledHeading = as ? heading[as.toUpperCase()] : heading.H1;
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
