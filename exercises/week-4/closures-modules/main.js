/* Exercise 3 */
const SongsManager = function() {
    let _songs = {}
    const _link = "https://www.youtube.com/watch?v="
    
    const addSong = function(name, link) {
        _songs[name] = link.split("").splice(32).join("")
    }

    const getSong = function(name) {
        console.log(_link + _songs[name])
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax",      "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ



/* Exercise 2 */
const Bank = function() {
    let _money = 500

    const depositCash = function(cash) {
        _money += cash
    }

    const checkBalance = function() {
        console.log(_money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance   
    }
}

const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950



/* Exercise 1 */
const StringFormatter = function () {
    const capitalizeFirst = function (string) {
        console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
    }

    const toSkewerCase = function (string) {
        console.log(string.replace(/\s+/g, '-'))
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase   
    }
}

const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should return Dorothy
// formatter.toSkewerCase("blue box") //should return blue-box





// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()

// usersModule.addUser(`Yan`)
// usersModule.addUser(`Yasna`)


// usersModule.listUsers()
// // console.log(userModule.users)