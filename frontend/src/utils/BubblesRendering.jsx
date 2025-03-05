import React, { Fragment } from "react";

import { v4 as uuid } from "uuid";

export const rendertag = (href, child) => {
  return (
    <Fragment key={uuid()}>
      <span className="merli-bot" style={{ fontWeight: "bold" }}>
        [{child.children[0].value}]
      </span>
      <br />
      <a href={href} target="_blank">
        {href}
      </a>
    </Fragment>
  );
};
