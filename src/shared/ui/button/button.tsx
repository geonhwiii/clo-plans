import { cn } from '@/shared/utils/cn/cn';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, disabled, className, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'min-w-40 cursor-pointer rounded-md bg-(--color-primary) px-6 py-4 text-white',
        'disabled:cursor-not-allowed disabled:bg-gray-300',
        className,
      )}
    >
      {children}
    </button>
  );
}
