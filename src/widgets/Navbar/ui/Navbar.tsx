import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps extends PropsWithChildren {
	className?: string;
}

export function Navbar ({ className, children }: NavbarProps): JSX.Element {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			{children}
			<div className={classNames(cls.links)}>
				<AppLink
					to={'/'}
					className={cls.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					Главная страница
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
}
