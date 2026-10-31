import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const KayakApp = lazy(() => import("@/components/KayakApp"));

const TITLE = "New to Kayaker.jp - ホワイトウォーターカヤック専門ポータル";
const DESC =
  "激流を漕ぐための専門ポータル。初心者向けボート・ギア選び、全国リバー難易度マップ、安全講習＆レスキューマニュアル、カヤック用語事典。";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // The app reads saved data from the browser on start, so render it after hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="min-h-screen" />;
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen" />}>
        <KayakApp />
      </Suspense>
    </ErrorBoundary>
  );
}
