import { cn } from '@/shared/utils/cn';

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: HTMLAnchorElement['target'];
}

export function ExternalLink({ href, className, children, target = '_blank' }: ExternalLinkProps) {
  return (
    <a className={cn('hover:underline', className)} href={href} target={target}>
      {children}
    </a>
  );
}
