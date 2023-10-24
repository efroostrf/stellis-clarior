import { useEffect, useState } from "react";

enum ScrollDirection {
  UP = "up",
  DOWN = "down",
}

/**
 * A hook that returns the direction of the user's scroll.
 * @returns The direction of the user's scroll.
 */
const useScrollDirection = () => {
  const [direction, setDirection] = useState<ScrollDirection>(
    ScrollDirection.UP
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let timeoutId: NodeJS.Timeout;

    const update = () => {
      const scrollY = window.scrollY;
      const newDirection: ScrollDirection =
        scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;

      if (
        newDirection !== direction &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setDirection(newDirection);
        }, 100);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, [direction]);

  return direction;
};

export default useScrollDirection;
