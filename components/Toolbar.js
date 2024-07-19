import React from 'react';

const Toolbar = ({ children }) => {
  return (
    <div className="toolbar">
      {children}
    </div>
  );
};

const ToolbarButton = ({ children }) => {
  return (
    <button className="toolbar-button">
      {children}
    </button>
  );
};

const ToolbarIcon = ({ src }) => {
  return <img src={src} alt="Toolbar Icon" />;
};

const SidePanel = ({ children }) => {
  return (
    <div className="side-panel">
      {children}
    </div>
  );
};

export { Toolbar, ToolbarButton, ToolbarIcon, SidePanel };
