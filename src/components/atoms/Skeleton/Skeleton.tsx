import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

export type SkeletonProps = React.ComponentProps<typeof ShadcnSkeleton>;

export function Skeleton(props: SkeletonProps) {
    return <ShadcnSkeleton {...props} />;
}
