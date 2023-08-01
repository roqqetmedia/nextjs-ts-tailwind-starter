"use client";

import { useCallback, useState } from "react";

export function useImageLoading(
  defaultValue = true,
): [boolean, () => void, string | undefined] {
  const [loading, setLoading] = useState(defaultValue);

  const handleOnLoadingComplete = useCallback(() => setLoading(false), []);

  return [
    loading,
    handleOnLoadingComplete,
    loading ? "scale-110 blur-2xl grayscale" : undefined,
  ];
}
