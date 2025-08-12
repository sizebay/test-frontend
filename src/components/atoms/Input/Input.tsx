import { Input as ShadcnInput } from "@/components/ui/input";

export type InputProps = React.ComponentProps<typeof ShadcnInput>;

export function Input(props: InputProps) {
    return <ShadcnInput {...props} />;
}