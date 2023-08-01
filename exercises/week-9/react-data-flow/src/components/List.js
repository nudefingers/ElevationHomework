import React from 'react';

function List({list, onSelectName}) {
    const clickName = function (name) {
        onSelectName(name)
    }
    return (<div className='list'>
        {list.map((name, index) => (
            <p key={index} onClick={() => clickName(name)}>{name}</p>
        ))}
    </div>)
}

export default List