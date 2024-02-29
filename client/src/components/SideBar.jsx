import React from 'react';

function SideBar({ setSelectedPage }) {
  const pages = ['Home', 'Page 1', 'Page 2', 'Page 3', 'Page 4'];

  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <div key={index} onClick={() => setSelectedPage(page)} className="sidebar-item">
          {page}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
