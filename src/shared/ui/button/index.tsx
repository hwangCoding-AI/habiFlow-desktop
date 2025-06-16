
import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

    const variants = {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700',
      outline: 'border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    };

    return (
      <button
        {...props}
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
      />
    );
  },
);

Button.displayName = 'Button';
