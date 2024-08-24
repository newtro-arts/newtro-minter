import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-[#D1F121] bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-[#D1F121] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-[#D1F121] font-ibmPlexMono',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
