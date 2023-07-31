import Item from "./Item";
import React, { Component } from 'react';

function Home({state}) {
    const shouldDiscount = state.shouldDiscount
    return (
    <div className='store'>
        {state.store.map(s =>
            <Item item={s.item} price={shouldDiscount ? s.price * (1 - s.discount) : s.price} key={s.item}/>
            )}
    </div>
    )
}

export default Home
