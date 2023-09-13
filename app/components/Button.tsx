'use client';

type ButtonColors = 'white' | 'teal' | 'transparent';

const classes = {
  white:
    'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow w-full',
  teal: 'bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-full w-full ',
  transparent: 'bg-transparent text-white py-2 px-4 rounded-full w-full',
};

function Button({
  children,
  onClick,
  color = 'white',
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  color?: ButtonColors;
  className?: string;
}) {
  return (
    //@ts-ignore
    <button
      className={`${className} ${classes[color] || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
