"use client";

import { FC, useEffect } from "react";

import useURLHash from "@/hooks/useURLHash";

const AnchorScroller: FC = () => {
  const [hash, setHash] = useURLHash();

  useEffect(() => {
    // TODO: before scroll wait for page loading
    if (!hash || typeof window === "undefined") return;

    const el = document.querySelector(`[data-anchor="${hash}"]`);
    const removeAnchor = el?.getAttribute("data-anchor-remove");

    if (!el) return;

    const rects = el.getClientRects()?.[0];
    const rectsTop = rects?.top || 0;
    const paddingTop = 100;
    const top = rectsTop + window.scrollY - paddingTop;

    const timeout = setTimeout(() => {
      window.scrollTo({ top, behavior: "smooth" });

      if (removeAnchor) {
        setHash(null);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [hash, setHash]);

  return null;
};

export default AnchorScroller;
