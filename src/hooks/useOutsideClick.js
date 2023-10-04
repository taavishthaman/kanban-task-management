import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // if (ref.current && !ref.current.contains(e.target)) {
        //   //This right here is the problem, find a different way to close the form
        //   handler();
        // }

        if (
          ref.current &&
          ref.current.id === "menus" &&
          !ref.current.contains(e.target)
        ) {
          handler();
        }
        if (e.target.id === "overlay") {
          handler();
        }
      }
      //Detect events on capturing phase
      document.addEventListener("click", handleClick, listenCapturing);
      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );

  return { ref };
}
