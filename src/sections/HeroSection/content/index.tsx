import {FC} from 'react';

import data from '../../../shared/MOCK_DATA.json';
import stub from '../../../shared/images/icons/stub.svg';
import tentai from '../../../shared/images/icons/Tentai.png';
import arrowRighr from '../../../shared/images/icons/Arrow Right.svg';

import s from './Content.module.scss'

const Content: FC = () => {

    return (
        <div className={s.container}>
            <div className={s.titleWrapper}>
                <div className={s.titleWrapper__top}>
                    <span className={s.greyText}>Наша</span>
                    <div className={s.images}>
                        {data.slice(0, 4).map((obj, index) => (
                            <img
                                key={index}
                                className={s.photo}
                                style={{zIndex: index, left: (54 * index) - (index === 0 ? 0 : (14 * index))}}
                                src={require(`../../../shared/${obj.photoPath}`)}
                                alt={`${index}`}
                            />
                        ))}
                        <img
                            key={'stub'}
                            className={s.photo}
                            style={{zIndex: 100, right: 0}}
                            src={stub}
                            alt='stump'
                        />
                    </div>
                    <span className={s.gradientText}>20+</span>
                </div>

                <div className={s.titleWrapper__bottom}>
                    <img className={s.titleWrapper__bottom_img} src={tentai} alt="Tentai"/>
                    <span className={s.greyText}>команда</span>
                </div>
            </div>

            <div className={s.buttonContent}>
                <p className={s.buttonContent__text}>Вместе строим будущее онлайн-торговли в Таиланде</p>
                <button className={s.buttonContent__button}>Связаться с нами <img src={arrowRighr} alt="right"/></button>
            </div>
        </div>
    );
};

export default Content;