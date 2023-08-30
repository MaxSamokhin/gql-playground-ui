import React, { FC, memo, useCallback, useState } from 'react';
import { Cat } from '../../gql/generated/graphql';
import CatFormContainer from '../cat-form/cat-form.container';
import styles from './cat-info.module.scss';

export interface CatInfoProps {
    cat: Cat;
    onDelete: () => void;
}

const CatInfo: FC<CatInfoProps> = ({ cat, onDelete }) => {
    const [edited, setEdited] = useState<boolean>(false);

    const handleEditCatInfo = useCallback(() => {
        setEdited(true);
    }, []);

    const handleFinishUpdateCat = useCallback(() => {
        setEdited(false);
    }, []);

    return (
        <section className={styles.catInfoContainer}>
            {!edited && (
                <>
                    <span>{`Name: ${cat.name}, ${cat.age} year`}</span>

                    <button className={styles.editButton} onClick={handleEditCatInfo}>
                        Edit
                    </button>
                </>
            )}

            {edited && <CatFormContainer initialValue={cat} onFinish={handleFinishUpdateCat} />}

            <button onClick={onDelete}>Delete</button>
        </section>
    );
};

export default memo(CatInfo);
