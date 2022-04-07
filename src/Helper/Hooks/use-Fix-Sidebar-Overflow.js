import { useEffect } from "react";

const useFixSidebarOverflow = (showSideBar) =>
  useEffect(() => {
    showSideBar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

export { useFixSidebarOverflow };
