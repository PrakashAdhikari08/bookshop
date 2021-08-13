import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NestedDropdwon } from "./auth-info.style";
import { Popover } from "src/components/popup/popup.component";
import Heading from "src/components/Heading/Heading.component";
const Support: React.FC = () => {
  const content = (
    <NestedDropdwon>
      <div className="support-dropdwon">
        <ul>
          <Heading as="h5">Documentation</Heading>
          <li>
            <Link to="#">How to customize dashboard.</Link>
          </li>
          <li>
            <Link to="#">How to use.</Link>
          </li>
        </ul>
        <ul>
          <Heading as="h5">Payments</Heading>
          <li>
            <Link to="#">How to customize admin</Link>
          </li>
          <li>
            <Link to="#">How to use</Link>
          </li>
        </ul>
      </div>
    </NestedDropdwon>
  );
  return (
    <div className="support">
      <Popover placement="bottomLeft" content={content} action="click">
        <a className="head-example">
          <FiHelpCircle size={24} />
        </a>
      </Popover>
    </div>
  );
};

export default Support;
