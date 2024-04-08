import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from './Form.module.scss';
import Modal from "../../../Modal";

interface FormData {
    name: string;
    email: string;
    text: string;
}

const Form: FC = () => {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data): void => {
        reset();
        setOpen(true);
        console.log(data);
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputWrapper}>
                <label className={s.label}>Имя</label>
                <input
                    {...register('name', {
                            required: '*Поле не должно быть пустым!'
                        }
                    )}
                    className={s.input}
                    type="text"
                    placeholder={'Ваше имя'}
                />
                <span className={s.error}>
                    {errors.name?.message}
                </span>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label}>Почта</label>
                <input
                    {...register('email', {
                            required: '*Поле не должно быть пустым!'
                        }
                    )}
                    className={s.input}
                    type="text"
                    placeholder={'example@email.com'}
                />
                <span className={s.error}>
                    {errors.name?.message}
                </span>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label}>Сообщение</label>
                <textarea
                    {...register('text', {
                            required: '*Поле не должно быть пустым!'
                        }
                    )}
                    className={s.textarea}
                    placeholder={'Введите ваше сообщение'}
                />
                <span className={s.error}>
                    {errors.name?.message}
                </span>
            </div>

            <button className={s.button} type={'submit'}>Отправить сообщение</button>

            <Modal isOpen={open} onClose={setOpen} />
        </form>
    );
};

export default Form;