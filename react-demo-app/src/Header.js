import React from "react";

function Header() {
  return (
    <header>
      <span>
        <i className="bi bi-person-circle"></i> {/* Changed class to className */}
        Mahadev Erande
      </span>

      <span>
        <i className="bi bi-telephone-fill"></i> {/* Changed class to className */}
        9657 8077 54
      </span>

      <span>
        <i className="bi bi-envelope"></i> {/* Changed class to className */}
        mm3917416@gmail.com
      </span>
    </header>
  );
}

export default Header;
