import type { FC, PropsWithChildren } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps extends PropsWithChildren {
	className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className } = props;
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
