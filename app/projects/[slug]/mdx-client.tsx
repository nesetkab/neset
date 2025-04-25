"use client";

import { Mdx } from "@/app/components/mdx";
import { Suspense } from "react";

export default function MdxClient({ code }: { code: string }) {
  if (!code) {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.error("[MdxClient] code prop is undefined or empty", code);
    }
    return <div className="text-red-500">MDX code is missing.</div>;
  }
  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-md" />}>
      <Mdx code={code} />
    </Suspense>
  );
}
