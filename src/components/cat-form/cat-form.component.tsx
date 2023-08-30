import React, { Dispatch, FC, FormEvent, SetStateAction, memo, useCallback, useEffect, useRef, useState } from 'react';
import { CatFormModel } from './cat-form.model';
import styles from './cat-form.module.scss';

export interface CatFormProps {
    initialValue?: CatFormModel;
    setCatForAction: Dispatch<SetStateAction<CatFormModel>>;
    executing: boolean;
    buttonText: string;
}

const CatForm: FC<CatFormProps> = ({ initialValue, setCatForAction, executing, buttonText }) => {
    const [error, setError] = useState<boolean>(false);

    const nameRef = useRef<HTMLInputElement>(null!);
    const ageRef = useRef<HTMLInputElement>(null!);

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            const name = nameRef.current.value;
            const ageFormValue = ageRef.current.value;

            if (!name?.trim() || !ageFormValue?.trim()) {
                setError(true);
                return false;
            } else {
                setError(false);
            }

            const age = parseInt(ageFormValue) ?? 0;

            setCatForAction(() => ({ name, age }));
            nameRef.current.value = '';
            ageRef.current.value = '';
        },
        [setCatForAction]
    );

    useEffect(() => {
        if (initialValue?.name) {
            nameRef.current.value = initialValue?.name;
            ageRef.current.value = `${initialValue?.age}`;
        }
    }, [initialValue]);

    return (
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input ref={nameRef} type='text' name='name' />
                </label>
            </div>

            <div className={styles.ageFieldWrapper}>
                <label>
                    Age:
                    <input ref={ageRef} type='number' name='age' />
                </label>
            </div>

            <div style={{ color: 'red' }} hidden={!error}>
                Check fields
            </div>

            {executing && <span>Executing ...</span>}

            <button type='submit'>{buttonText}</button>
        </form>
    );
};

export default memo(CatForm);
