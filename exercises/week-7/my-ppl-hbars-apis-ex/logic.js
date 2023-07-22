const Person = function (name, email) {
    let _person
    const setPerson = (name, email) => {
        _person = { name, email }
        return
    }
    setPerson(name, email)
    return {
        getPerson: () => structuredClone(_person)
    }
}

const People = function () {
    let _people = []
    return {
        getPeople: () => _people.map(p => p.getPerson()),
        setPeople: people => {
            _people = people.map(p => Person(p.name, p.email))
            return
        }
    }
}
    
