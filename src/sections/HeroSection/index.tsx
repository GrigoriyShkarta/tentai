import {FC} from 'react';

import Header from "./header";
import Content from "./content";

import ellipse1 from '../../shared/images/ellipses/ellipse1.png';
import ellipse2 from '../../shared/images/ellipses/ellipse2.png';
import ellipse3 from '../../shared/images/ellipses/ellipse3.png';
import iconLeft from '../../shared/images/icons/iconLeft.svg';

import s from './HeroSection.module.scss';

const HeroSection: FC = () => (
    <section className={s.wrapper}>
        <Header/>
        <div className={s.container}>
            <div className={s.link}>
                <img className={s.link__icon} src={iconLeft} alt="l"/>
                <span className={s.link__text}>Главная страница</span>
            </div>
            <Content />
        </div>
        <img className={`${s.ellipse} ${s.ellipse_one}`} src={ellipse1} alt="1"/>
        <img className={`${s.ellipse} ${s.ellipse_two}`} src={ellipse2} alt="2"/>
        <img className={`${s.ellipse} ${s.ellipse_three}`} src={ellipse3} alt="3"/>
    </section>
);

export default HeroSection;