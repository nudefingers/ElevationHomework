import React from 'react'


function Item(props) {
    return (<div className={props.item}>
        <p>{props.item}: {props.price}</p>        
    </div>)
}

export default Item