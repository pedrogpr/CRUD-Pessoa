import React from 'react';
import '../App.css';
import { SidebarNav } from './SidebarNav'

function Sidebar() {

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarNav.map((elemento, key) => {
          return (
            <li className="SidebarElement"
              key={key}
              id={window.location.pathname === elemento.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = elemento.link;
              }}>
              <div id="icone">{elemento.icone}</div>
              <div id="nome">{elemento.nome}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar