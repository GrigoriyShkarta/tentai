import {FC, useState} from 'react';

import data from '../../shared/MOCK_DATA.json';
import Card from "./Card";

import s from './TeamList.module.scss';

const TeamList: FC = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className={s.container}>
            <h1 className={s.title}>Наша команда про Tentai</h1>
            <div className={showMore ? s.cardsWrapper : s.cardsWrapperBG}>
                {data.slice(0, showMore ? data.length : 8).map((obj, index) => (
                    <Card
                        key={index}
                        img={obj.photoPath}
                        fullName={obj.fullName}
                        jobTitle={obj.jobTitle}
                        title={obj.title_message}
                        message={obj.message}
                    />
                ))}
            </div>

            {!showMore &&<button className={s.button} onClick={() => setShowMore(true)}>Посмотреть всех</button>}
        </section>

    );
};

export default TeamList;