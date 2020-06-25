import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AdditionPage from '../pages/AdditionPage';
import SubtractionPage from '../pages/SubtractionPage';
import MultiplicationPage from '../pages/MultiplicationPage';
import DivisionPage from '../pages/DivisionPage';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/addition" component={AdditionPage} />
            <Route path="/subtraction" component={SubtractionPage} />
            <Route path="/multiplication" component={MultiplicationPage} />
            <Route path="/division" component={DivisionPage} />
        </>
    );
}

export default Page;