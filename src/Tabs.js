import React, { useState } from "react";
const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs">
      {children.map((child, i) =>
        child.props.title ? (
          <button
            key={i}
            disabled={active === i}
            className={active === i ? "btn-active" : "btn"}
            onClick={() => setActive(i)}
          >
            {child.props.title}
          </button>
        ) : null
      )}
      {children.length > 0 ? (
        <div className="view">{children[active]?.props?.children}</div>
      ) : null}
    </div>
  );
};

export default Tabs;
