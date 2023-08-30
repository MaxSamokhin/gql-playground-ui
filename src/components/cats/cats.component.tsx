import React, { FC, memo, useMemo } from 'react';
import { Cat } from '../../gql/generated/graphql';
import CatInfoContainer from '../cat-info/cat-info.container';
import { TITLE } from './cats.constants';

interface CatsProps {
    cats?: (Cat | null)[];
}

const Cats: FC<CatsProps> = ({ cats }) => {
    const listCat = useMemo(() => {
        return cats?.map((cat: Cat | null) => <CatInfoContainer key={cat?.id} cat={cat!} />);
    }, [cats]);

    return (
        <section>
            <h1>{TITLE}</h1>
            {listCat}
        </section>
    );
};

export default memo(Cats);
