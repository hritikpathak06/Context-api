import React from 'react';

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>{(fname) => {
                return (
                    <LastName.Consumer>{(lname) => {
                        return (
                            <h1>Hello!! My name is {fname} {lname}</h1>
                        )
                    }}
                    </LastName.Consumer>
                )
            }}
            </FirstName.Consumer>
        </>
    )
}

export default ComC;

{/* <h1>Hello!! My name is {fname}</h1> */ }