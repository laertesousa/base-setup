import React, { useState } from 'react';

export default function useShowMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggle() {
    setShowMenu(!showMenu);
  }

  return [showMenu, toggle];
}
