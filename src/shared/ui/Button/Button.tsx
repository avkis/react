import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
	const { className, children, variant, ...otherProps } = props;

	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[variant ?? '']])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
