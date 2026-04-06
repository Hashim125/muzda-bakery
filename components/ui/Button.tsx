import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  const variants = {
    primary:
      'border-transparent bg-[#7a2f3f] px-5 text-white shadow-[0_16px_30px_rgba(122,47,63,0.16)] hover:bg-[#934857] focus-visible:ring-[#934857]',
    secondary:
      'border-[#7a2f3f]/15 bg-white/90 text-[#7a2f3f] hover:border-[#7a2f3f]/35 hover:bg-[#f8f1ec] focus-visible:ring-[#934857]',
    ghost:
      'border-transparent bg-transparent text-[#7a2f3f] hover:bg-[#7a2f3f]/8 focus-visible:ring-[#934857]',
    outline:
      'border-[#7a2f3f]/35 bg-transparent text-[#7a2f3f] hover:bg-[#7a2f3f] hover:text-white focus-visible:ring-[#934857]',
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm font-medium',
    md: 'px-5 py-3 text-sm font-medium',
    lg: 'px-7 py-4 text-base font-medium',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
