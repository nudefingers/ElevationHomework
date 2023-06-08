const story = "In the beginning there was light. Then there were wolves. " 
            + "Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, "
            + "the fire caused one heck of a lot of damage."
const specialChars = [",", "\\.", "'", '"',"\\?", "!", ";"]
const wordCounts = {a: 1}


function start() {
    let words = cleanText(story, specialChars)

    for (let key of Object.keys(words)) {
        addToCounter(words[key])
    }

    return wordCounts
}

function cleanText() {

    let regexString = specialChars.join('|');
    let regex = new RegExp(regexString, 'g');
    

    return story.toLowerCase().replace(regex, '').split(" ")
}

function addToCounter(word) {
    let keys = Object.keys(wordCounts)    
    if (keys.includes(word)) {
        wordCounts[word] = wordCounts[word] + 1        
    } else {
        wordCounts[word] = 1
    }    
}

console.log(start())
