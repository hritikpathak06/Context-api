import React, { createContext } from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const Demo = () => {
    return (
        <>
            <FirstName.Provider value={'Ritik'}>
                <LastName.Provider value={'Pathak'}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default Demo;
export {FirstName,LastName};
