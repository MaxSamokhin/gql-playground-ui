import React, { FC, memo, useCallback } from 'react';
import CatInfo from './cat-info.component';
import Loader from '../loader/loader.component';
import { Cat, GetCatsDocument, useDeleteCatMutation } from '../../gql/generated/graphql';

interface CatInfoContainerProps {
    cat: Cat;
}

const CatInfoContainer: FC<CatInfoContainerProps> = ({ cat }) => {
    const [deleteCatMutation, { loading }] = useDeleteCatMutation({
        variables: {
            id: `${cat.id!}`
        },
        refetchQueries: [GetCatsDocument]
        // update(cache, { data }) {
        //     cache.modify({
        //         fields: {
        //             cats(existingCatsRefs = [], { readField }) {
        //                 const deletedCat = data?.deleteCat;

        //                 return existingCatsRefs.filter(
        //                     (catRef: Reference) => readField('id', catRef) !== deletedCat?.id!
        //                 );
        //             },
        //         },
        //     });
        // },
    });

    const handleDelete = useCallback(() => {
        deleteCatMutation();
    }, [deleteCatMutation]);

    return (
        <Loader loading={loading}>
            <CatInfo cat={cat} onDelete={handleDelete} />
        </Loader>
    );
};

export default memo(CatInfoContainer);
