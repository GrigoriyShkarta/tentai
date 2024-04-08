import { FC } from 'react';

import appStore from '../../shared/images/adds/App Store.png';
import googlePlay from '../../shared/images/adds/Google Play.png';
import phones from '../../shared/images/adds/iPhone 15 Pro.png';

import s from './Adds.module.scss';

const Adds: FC = () => {
	return (
		<section className={s.container}>
			<p className={s.text}>
				<b>Присоединяйтесь уже сейчас</b> и открывайте для себя мир возможностей вместе с Tentai!
			</p>
			<div className={s.stores}>
				<img src={appStore} alt="app" />
				<img src={googlePlay} alt="google" />
			</div>
			<img className={s.phones} src={phones} alt="phones" />
		</section>
	);
};

export default Adds;
