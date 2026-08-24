import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Returns false during SSR and the first client render, true after hydration.
// Avoids the setState-in-effect pattern for the common "avoid hydration
// mismatch for client-only UI" case.
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
