import React from 'react'


function Item(props) {
    return (
        <div>
            <button onClick={props.prev}>Previous</button>
            <img src={props.image} alt="izi" />
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Item