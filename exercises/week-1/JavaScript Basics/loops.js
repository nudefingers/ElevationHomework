const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
    let person = {
        name: names[i],
        age: ages[i]
      }
    people.push(person);

    //console.log(names[i] + " is " + ages[i] + " years old")
}

/////

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]

//console.log(posts)

for (let i = 0; i < posts.length; i++) {
    let current = posts[i].text.toLowerCase()
    if (current.includes("worst") || current.includes("don't buy")) {
        posts.splice(i, 1)
    }
}

//console.log(posts)

//////

const messages = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  const idDel = 2
  const comDel = 3


  for (let key in messages) {
    if (key.id == idDel) {
        let com = key.comments
        
        for (let index = 0; index < com.length; index++) {
            if (com[index].id == comDel) {
                com.splice[index, 1]
            }
        }
            
    }  
}


  console.log(messages)