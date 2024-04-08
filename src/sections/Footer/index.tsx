import {FC} from 'react';

import tentai from '../../shared/images/header/Tentai Logo.png';
import apple from '../../shared/images/icons/appleCircle.svg';
import playMarket from '../../shared/images/icons/playMarketCircle.svg';
import huawey from '../../shared/images/icons/huaweyCircle.svg';
import mail from '../../shared/images/icons/gradientMail.svg';
import phone from '../../shared/images/icons/gradientPhone.svg';
import instagram from '../../shared/images/icons/instagram.svg';
import facebook from '../../shared/images/icons/facebook.svg';
import telegram from '../../shared/images/icons/telegram.svg';
import youtube from '../../shared/images/icons/youtube.svg';
import line from '../../shared/images/icons/line.svg';

import s from './Footer.module.scss';

const Footer: FC = () => (
    <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.content}>
                    <img className={s.content__img} src={tentai} alt="tentai"/>
                    <div className={s.content__socialMedia}>
                        <img className={s.apple} src={apple} alt=""/>
                        <img className={s.content__socialMedia_icon} src={playMarket} alt=""/>
                        <img className={s.content__socialMedia_icon} src={huawey} alt=""/>
                    </div>
                </div>

                <div className={s.content}>
                    <h4 className={s.content__title}>Компания</h4>
                    <ul className={s.content__list}>
                        <li className={s.content__list_item}>
                            <a href="/">Команда</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">Инвесторам</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">Партнерам</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">Рекламодателям</a>
                        </li>
                    </ul>
                </div>

                <div className={s.content}>
                    <h4 className={s.content__title}>Документы</h4>
                    <ul className={s.content__list}>
                        <li className={s.content__list_item}>
                            <a href="/">Политика конфиденциальности</a>
                        </li>
                        <li className={`${s.content__list_item} ${s.gradient}`}>
                            <a className={s.gradient} href="/">Договор-оферта</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">Пользовательское Соглашение</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">Обработка персональных данных</a>
                        </li>
                        <li className={s.content__list_item}>
                            <a href="/">API документация</a>
                        </li>
                    </ul>
                </div>

                <div className={s.content}>
                    <h4 className={s.content__title}>Contacts</h4>
                    <ul className={s.content__list}>
                        <li className={s.content__list_item}>
                            <img className={s.content__list_img} src={mail} alt="mail"/>
                            <a href="/">example@mail.com</a>
                        </li>
                        <li className={s.content__list_item} >
                            <img className={s.content__list_img} src={phone} alt="phone"/>
                            <a href="/">+66123456789</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.button}>
                <span className={s.button__copiryght}>© 2024 Tentai – Find it. Choose. Make life more convenient.</span>
                <div className={s.button__socialMedia}>
                    <a href={'/'}><img className={s.button__socialMedia_img} src={instagram} alt="icon"/></a>
                    <a href={'/'}><img className={s.button__socialMedia_img} src={facebook} alt="icon"/></a>
                    <a href={'/'}><img className={s.button__socialMedia_img} src={telegram} alt="icon"/></a>
                    <a href={'/'}><img className={s.button__socialMedia_img} src={youtube} alt="icon"/></a>
                    <a href={'/'}><img className={s.button__socialMedia_img} src={line} alt="icon"/></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;