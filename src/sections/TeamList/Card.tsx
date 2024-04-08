import {FC, useState} from 'react';

import s from './TeamList.module.scss';

interface Props {
    img: string;
    fullName: string;
    jobTitle: string;
    title: string;
    message: string;
}

const Card: FC<Props> = ({ img, fullName, jobTitle, title, message }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
        setIsFlipped(true);
        setTimeout(() => {
            setIsFlipped(false);
            setShowBack(!showBack);
        }, 500);
    }

    return (
        <div className={`${s.card}`} onClick={handleClick}>
            {!showBack && <img className={`${s.card__img} ${isFlipped ? s.cardTurning : ''}`} src={require(`../../shared/${img}`)} alt="ava"/>}
            {showBack &&
                <div className={`${s.card__description} ${isFlipped ? s.cardTurning : ''}` }>
                    <p className={s.card__pinkText}>{title}</p>
                    <br/>
                    <p className={s.card__text}>{message}</p>
                </div>
            }
            <div className={s.card__bottomInfo}>
                <p className={s.card__fullName}>{fullName}</p>
                <p className={s.card__text}>{jobTitle}</p>
            </div>
        </div>
    );
};

export default Card;