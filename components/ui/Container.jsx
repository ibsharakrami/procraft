export default function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-[110px] ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
