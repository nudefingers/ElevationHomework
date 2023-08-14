import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("")
    const [fruit, setFruit] = useState("")

    const handleFruitChange = (event) => {
        const changedFruit = event.target.value
        setFruit(changedFruit)
        console.log(changedFruit)
    }

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={handleFruitChange} value={fruit}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
            </select>
        </div>
    );
}
export default Exercise2;
