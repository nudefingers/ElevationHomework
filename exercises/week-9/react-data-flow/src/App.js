import './App.css';
import React, { useState } from 'react';
import Item from './components/Item';
import List from './components/List';
import Conversation from './components/Conversation';

function App() {
    // Excercise 1
    const dataSourse = {
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://deluxe.com.ua/media/img/uploads/image/ukrop2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    }
    const [data, setData] = useState(dataSourse)
    const shiftImageBack = () => {
        setData((prevData) => ({
            ...prevData,
            currentImg: (prevData.currentImg - 1)
        }))
    }
    const shiftImageForward = () => {
        setData((prevData) => ({
            ...prevData,
            currentImg: (prevData.currentImg + 1)
        }))
    }


    const dialoguesData = {
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }

    const [converse, setConverse] = useState(dialoguesData)
    const currentName = converse.displayConversation
    const list = converse.conversations.map(c => c.with)
    const displayConvo = function(name) {
        setConverse(prev => ({
            ...prev,
            displayConversation: name
        }))
    }
    const resetName = function() {
        setConverse(prev => ({
            ...prev,
            displayConversation: null
        }))
    }

    return (
        <React.Fragment>
            {currentName === null ? (
                <List list={list} onSelectName={displayConvo}/>
            ) : (
                <Conversation replicas={converse.conversations.find((c) => c.with === currentName).convo} name={currentName} comeBack={resetName}/>
            )}

            <br /><br /><br /><br />
            <Item image={data.images[data.currentImg]} prev={shiftImageBack} next={shiftImageForward} />
        </React.Fragment>
    )
}

export default App;