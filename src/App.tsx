import React, { FC, memo } from 'react';
import CatsContainer from './components/cats/cats.container';
import './App.css';
import { useReactiveVar } from '@apollo/client';
import { globalErrorMessageVar } from './gql/apollo-client.config';

const App: FC = () => {
    const globalErrorMessage = useReactiveVar(globalErrorMessageVar);
    console.log(`globalErrorMessage`, globalErrorMessage);

    return (
        <div className='container'>
            <CatsContainer />
        </div>
    );
};

export default memo(App);
