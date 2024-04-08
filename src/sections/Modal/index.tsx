import {Dispatch, FC, SetStateAction, useEffect, useMemo} from 'react';
import {createPortal} from "react-dom";

import chicken from '../../shared/images/modal/chicken.png';
import instagram from '../../shared/images/icons/instagram.svg';
import facebook from '../../shared/images/icons/facebook.svg';
import telegram from '../../shared/images/icons/telegram.svg';
import youtube from '../../shared/images/icons/youtube.svg';
import line from '../../shared/images/icons/line.svg';

import s from './Modal.module.scss';

const modal = document.querySelector("#modal");

interface ModalProps {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        if (modal && isOpen) {
            modal.appendChild(element);

            return () => {
                modal.removeChild(element)
            }
        }
    })

    return (
        createPortal(
            <div className={s.modal} onClick={() => onClose(false)}>
                <div className={s.card}>
                    <h1 className={s.card__title}>Заявка отправлена!</h1>
                    <img className={s.card__img} src={chicken} alt="coco"/>
                    <p className={s.card__text}>Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время, чтобы отправить вам все необходимые детали на электронную почту.</p>
                    <br/>
                    <p className={s.card__text}>Чтобы ничего не пропустить, загляните на <a className={s.card__link} href="/">Tentai</a> и подпишитесь на наши соцсети:</p>
                    <div className={s.socialMedia}>
                        <a href="/"><img className={s.socialMedia__icon} src={instagram} alt="i"/></a>
                        <a href="/"><img className={s.socialMedia__icon} src={facebook} alt="i"/></a>
                        <a href="/"><img className={s.socialMedia__icon} src={telegram} alt="i"/></a>
                        <a href="/"><img className={s.socialMedia__icon} src={youtube} alt="i"/></a>
                        <a href="/"><img className={s.socialMedia__icon} src={line} alt="i"/></a>
                    </div>
                    <p className={s.card__text}>Спасибо за ваш интерес к нашему проекту. С нетерпением ждем нашего сотрудничества!</p>
                    <br/>
                    <p className={s.card__gradientText}>Команда Tentai</p>
                    <button className={s.card__button} onClick={() => onClose(false)}>Вернуться на главную</button>
                </div>
            </div>,
            element
        )
    )
}


export default Modal;