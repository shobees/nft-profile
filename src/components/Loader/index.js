import React from "react";
import { Image } from "semantic-ui-react";
import "./style.css";

const Loader = () => {
  return (
    <div className="custom-loader">
      <Image src="https://lh3.googleusercontent.com/F_ZTdAyw1DFiLaXk5tpSvObeOIwSD_u_ytN9nzAnggtRQgNtAaNWmNkqsQbXsbX3EppQUOT2g-mofMNxbaOZ_6qR=w600" />
    </div>
  );
};

export default Loader;
