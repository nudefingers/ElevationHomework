import React from 'react'

function SubCompany(props) {
    return (<div className={props.name}>
        <h4>{props.name} {props.revenue}</h4>        
    </div>)
}

export default SubCompany