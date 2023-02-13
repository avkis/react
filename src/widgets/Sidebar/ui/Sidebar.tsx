import { FC, PropsWithChildren, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import LangSwitcher from 'widgets/LandSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps extends PropsWithChildren {
	className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
	const {className, children} = props;
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed(!collapsed);
	}
	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<div className={cls.controls}>
				<button onClick={onToggle}>toggle</button>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
