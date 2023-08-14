import { useState } from 'react';

const Exercise1 = () => {
    const [person, setPerson] = useState({ name: "", age: "" })

    const handleChange = (event, property) => {
        setPerson({ ...person, [property]: event.target.value })
    }

    const handleSubmit = () => {
        const message = `Come in ${person.name}, you're ${person.age} - that's good enough`
        alert(message)
    }

    return (
        <div>
            <input id="name-input" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input id="age-input" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button onClick={handleSubmit}>Go to Bar</button>
        </div>
    )
}
export default Exercise1;