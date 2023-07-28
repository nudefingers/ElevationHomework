import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    const spamCount = 500
    const spamArray = Array.from({ length: spamCount }, (_, index) => {
        return <Spam key={index} />
    })

    return <React.Fragment>{spamArray}</React.Fragment>
}

export default Spamalot

