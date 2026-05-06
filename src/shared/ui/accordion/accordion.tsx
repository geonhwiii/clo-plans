import { useState, type ReactNode } from 'react';

import { ChevronDownIcon } from '@/shared/icon/chevron-down';
import { cn } from '@/shared/utils/cn';

export interface AccordionItem {
  label: ReactNode;
  value: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((item, index) => (
        <AccordionRow key={index} item={item} />
      ))}
    </div>
  );
}

function AccordionRow({ item }: { item: AccordionItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between border-b border-black py-4 text-left"
      >
        <span className="text-lg font-medium">{item.label}</span>
        <ChevronDownIcon
          data-open={isOpen}
          className="transition-transform data-[open=true]:-rotate-180"
        />
      </button>
      {isOpen && <div className="min-h-40 bg-gray-100 pb-4">{item.value}</div>}
    </div>
  );
}
