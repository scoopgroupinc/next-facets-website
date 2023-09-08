'use client';

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const classes = {
    white:
      'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow',
    teal: 'bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-full',
  };

  return (
    <button className={classes.white} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
