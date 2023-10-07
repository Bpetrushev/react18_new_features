import React, { useTransition } from 'react';

interface TabBtnProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  onClick?: () => void;
}

const TabButton = ({ onClick, title, ...rest }: TabBtnProps) => {
  const [isPending, startTransition] = useTransition();

  const handleBtnClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <button onClick={handleBtnClick} {...rest}>
      {title}
    </button>
  );
};

export default TabButton;
