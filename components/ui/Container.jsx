export default function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto w-full px-[83px] md:px-[100px] lg:px-[110px] flex flex-col items-center text-center ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
