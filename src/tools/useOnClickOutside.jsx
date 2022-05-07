import { useEffect } from "react";

export function useOnClickOutside(ref, callback) {
  useEffect(() => {
    function handler(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    window.addEventListener("mousedown", handler);

    return () => window.removeEventListener("mousedown", handler);
  }, [callback, ref]);
}
