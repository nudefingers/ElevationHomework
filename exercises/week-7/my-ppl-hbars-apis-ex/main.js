const URL = `https://randomuser.me/api/?inc=name,email&results=10`
const people = People()
// const renderer = Renderer().renderer(people)
// const renderer = Renderer()

const receivePeople = function () {
    $.ajax({
        url: URL,
        dataType: `json`,
        success: controlData
    })
}

const controlData = function (data) {
    const peopleFromApi = data.results
                              .map(p => Person(`${p.name.first} ${p.name.last}`, p.email)
                              .getPerson())

    people.setPeople(peopleFromApi)
    Renderer.render(people.getPeople())
}

receivePeople()