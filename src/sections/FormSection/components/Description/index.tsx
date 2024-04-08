import {FC} from 'react';

import mail from '../../../../shared/images/icons/whiteMail.png';
import phone from '../../../../shared/images/icons/whitePhone.png';

import s from './Description.module.scss';

const Description: FC = () => (
    <div className={s.description}>
        <p className={s.bigText}>Станьте частью революции онлайн-торговли в Таиланде</p>
        <p className={s.text}>Для дополнительной информации и сотрудничества, пожалуйста, свяжитесь с нами через указанные контактные данные. Мы всегда открыты для ваших вопросов и предложений!</p>
        <div className={s.contacts}>
            <div className={s.contacts__content}>
                <img className={s.contacts__content_icon} src={mail} alt="mail"/>
                <span className={s.contacts__content_text}>info@tentai.pro</span>
            </div>
            <div className={s.contacts__content}>
                <img className={s.contacts__content_icon} src={phone} alt="mail"/>
                <span className={s.contacts__content_text}>+66123456789</span>
            </div>
        </div>
    </div>
);

export default Description;