import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARI = 'primary',
	SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
	// children?: ReactNode | string;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, theme = AppLinkTheme.PRIMARI, ...otherProps }) => {
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
}
