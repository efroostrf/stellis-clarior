import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useURLHash = () => {
  const params = useParams();
  const [hash, setHash] = useState<string | null>(null);

  const set = useCallback((value: string | null) => {
    setHash(value);

    if (!value) {
      history.replaceState(null, "", " ");
      return;
    }

    window.location.hash = value || "";
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onChange = () => {
      const hash = window.location.hash;

      if (hash === undefined) {
        return;
      }

      setHash(hash ? hash.slice(1) : null);
    };

    onChange();

    window.addEventListener("hashchange", onChange, false);

    return () => {
      window.removeEventListener("hashchange", onChange);
    };
  }, [params]);

  return [hash, set] as const;
};
``;
export default useURLHash;
