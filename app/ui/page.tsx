import React from "react";

import ButtonBlack from "../components/ui/ButtonBlack";
import ButtonWhite from "../components/ui/ButtonWhite";

const UITestPage = () => {
  return (
    <div>
      UITestPage
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <span>
          {" "}
          <h4>Black</h4>
          <ButtonBlack />
        </span>
        <span>
          {" "}
          <h4>White</h4>
          <ButtonWhite />
        </span>
      </div>
    </div>
  );
};

export default UITestPage;
