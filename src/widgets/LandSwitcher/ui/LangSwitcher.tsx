import type { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps extends PropsWithChildren {
	className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
	const { className } = props;
	const { t, i18n } = useTranslation();

	const toggle = (): void => {
		void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			variant={ThemeButton.CLEAR}
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={toggle}
		>
			{t('language')}
		</Button>
	);
};

export default LangSwitcher;
