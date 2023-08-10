import './button.module.scss';

type buttonSizeType = {
  [key: string]: string;
}

type buttonColorType = {
  [key: string]: string;
}

const buttonSize: buttonSizeType = {
  small: 'w-20 h-8 text-xs',
  medium: 'w-24 h-10 text-base',
  large: 'w-32 h-12 text-lg',
};

const buttonTheme: buttonColorType = {
  blue: 'bg-violet-500 hover:bg-violet-600 text-white',
  gray: 'bg-gray-300 hover:bg-gray-400 text-black',
  none: '',
};

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  theme: 'blue' | 'gray';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  attr?: any;
}

const Button = ({ children, size = "medium", theme = "gray", onClick, attr }: ButtonProps) => {
  return (
    <button
      className={`${buttonTheme[theme]} ${buttonSize[size]} w-full h-full px-[6px] py-[8px] rounded border-0 outline-0 box-border cursor-pointer ease-in duration-300
      `}
      onClick={onClick}
      {...attr}
    >
      {children}
    </button>
  );
};

export default Button;

