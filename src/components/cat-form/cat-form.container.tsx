import React, { FC, memo, useEffect, useState } from 'react';
import CatForm from './cat-form.component';
import { CatFormModel } from './cat-form.model';
import { Cat, GetCatsDocument, useCreateCatMutation, useUpdateCatMutation } from '../../gql/generated/graphql';
import { INITIAL_CAT_FOR_ACTION } from './cat-form.constants';
import { Reference, gql } from '@apollo/client';

interface CatFormContainerProps {
    initialValue?: Cat;
    onFinish?: () => void;
}

const CatFormContainer: FC<CatFormContainerProps> = ({ initialValue, onFinish }) => {
    const [catForAction, setCatForAction] = useState<CatFormModel>(INITIAL_CAT_FOR_ACTION);

    const [createCatMutation, { loading: creatingCat }] = useCreateCatMutation({
        variables: {
            createCatInput: {
                name: catForAction.name,
                age: catForAction.age
            }
        },
        refetchQueries: [GetCatsDocument]
        // update(cache, { data }) {
        //     cache.modify({
        //         fields: {
        //             cats(existingCatsRef = []) {
        //                 const newCatRef = cache.writeFragment({
        //                     data: data?.createCat!,
        //                     fragment: gql`
        //                         fragment NewCat on Cat {
        //                             id
        //                             name
        //                             type
        //                         }
        //                     `,
        //                 });
        //                 return [...existingCatsRef, newCatRef];
        //             },
        //         },
        //     });
        // },
    });

    const [updateCatMutation, { loading: updatingCat }] = useUpdateCatMutation({
        variables: {
            updateCatInput: {
                name: catForAction.name,
                age: catForAction.age,
                id: initialValue?.id!
            }
        },
        // refetchQueries: [GetCatsDocument],
        update(cache, { data }) {
            cache.modify({
                fields: {
                    cats(existingCatsRefs = [], { readField }) {
                        const updatedCat = cache.writeFragment({
                            id: cache.identify(data?.updateCat!),
                            data: data?.updateCat!,
                            fragment: gql`
                                fragment NewCat on Cat {
                                    id
                                    name
                                }
                            `
                        });
                        return existingCatsRefs.map((catRef: Reference) =>
                            readField('id', catRef) === data?.updateCat?.id ? updatedCat : catRef
                        );
                    }
                }
            });
        }
    });

    useEffect(() => {
        if (initialValue?.name === catForAction.name && initialValue.age === catForAction.age) {
            onFinish?.();
            return;
        }

        if (initialValue?.id && catForAction.name && catForAction.age >= 1) {
            updateCatMutation();
            onFinish?.();
            return;
        }

        if (catForAction.name && catForAction.age >= 1) {
            createCatMutation();
            onFinish?.();
        }
    }, [catForAction, createCatMutation, initialValue, updateCatMutation, onFinish]);

    return (
        <CatForm
            initialValue={{ name: initialValue?.name!, age: initialValue?.age! }}
            setCatForAction={setCatForAction}
            executing={updatingCat || creatingCat}
            buttonText={initialValue?.name ? 'Save Cat' : 'Add Cat'}
        />
    );
};

export default memo(CatFormContainer);
