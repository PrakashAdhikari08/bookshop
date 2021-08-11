import React from "react";
import {Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {BiSearch} from "react-icons/bi";

import {Div} from "./search.style";
import {RootState} from "@Redux/rootReducer";
import {Popover} from "@Components/popup/popup.component";

const Search: React.FC = () => {
  const darkMode = useSelector(
    (state: RootState) => state.themeLayout.darkMode
  );
  const search = (e: React.FormEvent<HTMLInputElement>) => {};
  const content = (
    <div style={{ maxWidth: "400px" }}>
      <Link to="#">
        <span className="certain-search-item-count text-cut-1">
          hello this is search contenthello this is search contenthello this is
          search contenthello this is search contenthello this is search
          content.
        </span>
      </Link>
    </div>
  );

  return (
    <Div
      className="certain-category-search-wrapper"
      style={{ width: "100%" }}
      darkMode={darkMode}
    >
      <Row className="ant-row-middle">
        <Col md={1} xs={1} className={"text-right"}>
          <span className="certain-category-icon">
            <BiSearch size={22} />
          </span>
        </Col>
        <Col md={23} xs={23}>
          <Popover
            placement="bottomLeft"
            title={"Search for Your Need."}
            action={"focus"}
            content={content}
          >
            <Input
              size="small"
              onInput={search}
              placeholder="Search for Your Neeed.........."
            />
          </Popover>
        </Col>
      </Row>
    </Div>
  );
};

export default Search;
