import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./styles.css";

// Ensure TanStack Start client hydration object exists in browser runtime
if (typeof window !== "undefined") {
  (window as any).$_TSR = (window as any).$_TSR || {
    t: new Map(),
    buffer: [],
    initialized: false,
    router: {
      manifest: {},
      matches: [],
      dehydratedData: null,
    },
  };
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
