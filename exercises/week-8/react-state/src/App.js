import React, { useState } from 'react';
import Hudini from './components/Hudini';
import Home from './components/Home';
import Landing from './components/Landing';
import './App.css';

function App() {
    const data = {
        user: "Robyn",
        store: [
            { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
            { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
            { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
        ],
        shouldDiscount: true,
        currentPage: "Landing"
    }
    const [state, setState] = useState(data)
    const CurrentPageComponent = state.currentPage === "Landing" ? Landing : Home 

    const togglePage = () => {
        setState(prevState => ({
            ...prevState,
            currentPage: prevState.currentPage === "Landing" ? "Home" : "Landing"
        }))
    }

    return (
        <React.Fragment>
            <Hudini />
            <CurrentPageComponent state={state} />
            <button onClick={togglePage}>Switch pages</button>
        </React.Fragment>
    )
}

export default App