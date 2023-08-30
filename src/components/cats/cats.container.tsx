import React, { FC, memo } from 'react';
import Loader from '../loader/loader.component';
import Cats from './cats.component';
import { useGetCatsQuery } from '../../gql/generated/graphql';
import CatFormContainer from '../cat-form/cat-form.container';

const CatsContainer: FC = () => {
    // const { loading, data } = useQuery<GetCatsQuery>(GetCatsDocument); old example
    const { loading, data } = useGetCatsQuery(); // useGetCatsLazyQuery
    // const [getCats, { loading, error, data }] = useGetCatsLazyQuery();

    return (
        <Loader loading={loading}>
            <Cats cats={data?.cats!} />

            <CatFormContainer />
        </Loader>
    );
};

export default memo(CatsContainer);
