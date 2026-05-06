import { cn } from '@/shared/utils/cn';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function ToggleSwitch({ checked, onChange, className }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex h-8 w-16 cursor-pointer items-center rounded-full bg-(--color-primary) px-1',
        className,
      )}
    >
      <span
        data-checked={checked}
        className="size-6 rounded-full bg-white transition-transform data-[checked=true]:translate-x-8"
      />
    </button>
  );
}
