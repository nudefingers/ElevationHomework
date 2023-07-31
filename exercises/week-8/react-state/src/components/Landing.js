import React from 'react';

function Landing({state}) {
    let hottestItem = state.store.find((i => i.hottest)).item

    return (<div className='welcome'>
        <h3>Welcome, {state.user}</h3>
        <h4>the hottest item in the store is {hottestItem}</h4>  

    </div>)
}

export default Landing
