import { useTranslation } from 'react-i18next';

function AboutPage() {
	const {t} = useTranslation('aboutPage');
	return ( 
		<div>
			<h1>{t('about_page')}</h1>
		</div>
	 );
}

export default AboutPage;