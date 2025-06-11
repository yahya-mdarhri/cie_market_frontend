import { useLocation } from "react-router-dom";

// this hook is used to check if the current path is active
export function useIsActive(path: string, exact: boolean = true): boolean {
    const location = useLocation();
    if (exact) {
      return location.pathname === path;
    } else {
      return location.pathname.startsWith(path);
    }
  }