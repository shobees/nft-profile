import React from "react";
import { Divider, Header } from "semantic-ui-react";
import "./style.css";

const SectionTitleBar = ({ title }) => {
  return (
    <div className="section-title-bar">
      <Divider style={{ marginBottom: "30px 0" }} horizontal>
        <Header style={{ fontSize: "2.5rem" }} as="h1">
          {title}
        </Header>
      </Divider>
    </div>
  );
};

export default SectionTitleBar;
