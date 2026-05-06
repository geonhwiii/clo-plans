import { cn } from '@/shared/utils/cn';

export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px bg-gray-200/20', className)} />;
}
