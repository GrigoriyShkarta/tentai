import {FC} from 'react';

import logo from '../../../shared/images/header/Tentai Logo.png';
import prise from '../../../shared/images/header/IconPrice.png';
import planet from '../../../shared/images/header/planet.png';

import s from './Header.module.scss';


const Header: FC = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img src={logo} alt="logo"/>

                <nav className={s.navigate}>
                    <ul className={s.navigate__list}>
                        <li className={`${s.navigate__list_item} ${s.price}`}>
                            <img className={s.icon} src={prise} alt="prise"/>
                            <span className={s.price__item}>Дарим призы</span>
                        </li>
                        <li className={s.navigate__list_item}>О проекте</li>
                        <li className={s.navigate__list_item}>Услуги</li>
                        <li className={s.navigate__list_item}>Преимущества</li>
                        <li className={s.navigate__list_item}>Команда</li>
                    </ul>

                    <div className={s.languagePanel}>
                        <img className={s.languagePanel__icon} src={planet} alt="planet"/>
                        <span className={s.languagePanel__text}>ENG</span>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;