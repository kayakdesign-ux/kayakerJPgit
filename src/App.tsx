import KayakApp from "@/components/KayakApp";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <KayakApp />
    </ErrorBoundary>
  );
}
