import React from 'react'
// import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'


function App() {
    // Exercise 1
    const showCompany = (name, revenue) => {
        return <div>{name} makes {revenue} every year</div>
    }
    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
    ]

    // Exercise 2
    const getClassName = (temperature) => {
        if (temperature < 15) {
            return "freezing"
        } else if (temperature >= 5 && temperature < 30) {
            return "fair"
        } else {
            return "hell-scape"
        }
    }

    return (
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 1</h4>
            <div className="exercise" id="ex-1">
                {companies.map((c) => showCompany(c.name, c.revenue))}
            </div>

            <h4 className='ex-title'>Exercise 2</h4>
            <div className="exercise" id="ex-2">
                <div id="weatherBox" className={getClassName(0)}></div>
                <div id="weatherBox" className={getClassName(20)}></div>
                <div id="weatherBox" className={getClassName(40)}></div>
            </div>
        </div>
    )
}

export default App