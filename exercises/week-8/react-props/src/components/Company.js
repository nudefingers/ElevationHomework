import SubCompany from "./SubCompany";
import React, { Component } from 'react';

function Company(props) {
    return <SubCompany name={props.name} revenue={props.revenue}/>
}

export default Company
