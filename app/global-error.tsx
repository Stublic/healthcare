"use client";

import * as Sentry from "@/node_modules/@sentry/nextjs/build/types/index.types";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>{/* Your Error component here... */}</body>
    </html>
  );
}
