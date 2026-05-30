import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "witcher3Progress";

export function useQuestProgress() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggle = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setCompleted({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getCount = useCallback(
    (ids: string[]) => {
      return ids.filter((id) => completed[id]).length;
    },
    [completed]
  );

  return { completed, toggle, resetAll, getCount };
}
