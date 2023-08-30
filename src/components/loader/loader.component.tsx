import { FC, ReactNode, memo } from 'react';

interface LoaderProps {
    children: ReactNode;
    loading: boolean;
}

const Loader: FC<LoaderProps> = ({ children, loading }) => {
    return loading ? 'Loading ...' : children;
};

export default memo(Loader);
