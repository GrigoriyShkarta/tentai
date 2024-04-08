import {FC} from 'react';

import Description from "./components/Description";
import Form from "./components/Form";

import s from './FormSection.module.scss';

const FormSection: FC = () => (
    <section className={s.container}>
        <Description />
        <Form />
    </section>
);

export default FormSection;