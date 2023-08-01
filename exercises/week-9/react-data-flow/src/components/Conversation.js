import React from 'react';

function Conversation({ replicas, name, comeBack }) {
    return (
        <div className='converse'>
            <button onClick={comeBack}>Back</button>
            {replicas.map((r, index) => (
                <div key={index} className={r.sender}><b>{r.sender=='self' ? 'Me: ' : `${name}: `}</b>{r.text}</div>
            ))}
        </div>)
}

export default Conversation
