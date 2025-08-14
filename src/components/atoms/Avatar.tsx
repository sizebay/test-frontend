import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number; // px
  className?: string;
};

export function Avatar({ src, alt, size = 48, className = "" }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
}
