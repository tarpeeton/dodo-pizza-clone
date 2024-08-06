import { FC } from 'react';

interface IButton {
  label: string;
  rounded?: boolean;
  width?: boolean;
  bgColor?: boolean;
  secondary?: boolean;
  fontSize: number;
  weight: number;
}

const Button: FC<IButton> = ({ label, rounded, width, bgColor, secondary, fontSize, weight }) => {
  const roundedClass = rounded ? 'rounded-[12px]' : '';
  const widthClass = width ? 'w-full' : '';
  const bgColorClass = bgColor ? 'bg-[rgb(255,105,0)] text-white' : '';
  const secondaryClass = secondary ? 'bg-[rgb(255,240,230)] text-[rgb(209,87,0)]' : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}px]` : 'text-[14px]';
  const weightClass = weight ? `font-${weight}` : 'font-semibold';

  return (
    <button className={`${roundedClass} ${widthClass} ${bgColorClass} ${secondaryClass} ${fontSizeClass} ${weightClass}`}>
      {label}
    </button>
  );
};

export default Button;
