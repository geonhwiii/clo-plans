interface SpacingProps {
  className?: string;
  size: number;
}

export function Spacing({ className, size }: SpacingProps) {
  return <div className={className} style={{ height: `${size}px` }} />;
}
