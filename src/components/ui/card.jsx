// components/ui/card.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-sm transition-colors",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("p-6", className)}
      {...props}
    />
  );
}
