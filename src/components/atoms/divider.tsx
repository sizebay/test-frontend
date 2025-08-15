import { cn } from "@/helpers";
import { HTMLAttributes } from "react";

type DividerOrientation = "horizontal" | "vertical";
export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: DividerOrientation;
};

export function Divider({
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      className={cn(
        "bg-surface-200",
        orientation === "horizontal" && "h-px w-full",
        orientation === "vertical" && "w-px h-full",
        props.className
      )}
    />
  );
}
