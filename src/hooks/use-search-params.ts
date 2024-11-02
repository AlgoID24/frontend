import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type SearchParams = Record<string, string | undefined | null>;

export function useCustomSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getSearchParams = useMemo(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  const setSearchParams = useCallback(
    (newParams: SearchParams) => {
      const updatedParams = new URLSearchParams(searchParams);

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          updatedParams.delete(key);
        } else {
          updatedParams.set(key, value);
        }
      });

      const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
      router.push(newUrl);
    },
    [router, searchParams],
  );

  return { getSearchParams, setSearchParams };
}
