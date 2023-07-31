import React, { useState } from 'react';

function Hudini() {
    const [show, setShow] = useState(false)
    return (
        <div className="show">
            <div>{show === true ? `Now you see me` : `Now you don't`}</div>
            <button onClick={() => setShow(!show)}>Illusion!</button>
        </div>
    )
}

export default Hudini
