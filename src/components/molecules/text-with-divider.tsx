import { Divider, Typography, TypographyProps } from "../atoms";

export function TextWithDivider(props: TypographyProps) {
  return (
    <div className="flex gap-2 items-center w-full">
      <Divider />
      <Typography className="text-neutral-500" {...props} />
      <Divider />
    </div>
  );
}
