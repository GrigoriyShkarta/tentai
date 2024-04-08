import {FC} from 'react';

import Mission from "./Mission";

import mission1 from '../../shared/images/missions/mission1.png'
import mission2 from '../../shared/images/missions/mission2.png'
import mission3 from '../../shared/images/missions/mission3.png'

import s from './MissionValues.module.scss';

const MissionValues: FC = () => (
    <section className={s.container}>
        <div className={s.content}>
            <h1 className={s.title}>Миссия и ценности</h1>
            <div className={s.missionsWrapper}>
                <Mission
                    img={mission1}
                    text={'Создать интернацио-нальное сообщество'}
                />
                <Mission
                    img={mission2}
                    text={'Ведущая платформа для торговли'}
                />
                <Mission
                    img={mission3}
                    text={'Доступность для всех пользователей'}
                />
            </div>
        </div>
    </section>
);

export default MissionValues;