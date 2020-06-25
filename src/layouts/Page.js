import React from 'react';
import { Route } from 'react-router-dom';

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