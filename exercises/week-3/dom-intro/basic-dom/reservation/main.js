const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

function checkReservation() {
    let name = document.getElementById("textInput").value.toLowerCase()

    for (let key of Object.keys(reservations)) {
        
        if (key.toLowerCase() === name.toLowerCase()) {
            let currentClaimed = reservations[key].claimed;

            if (currentClaimed) {
                alert("Hmm, someone already claimed this reservation")
                break
            }
            if (!currentClaimed) {
                reservations[key] = { claimed: true }
                alert(`Welcome, ${key}`)
                break
            }
        } else {
            reservations[name] = { claimed: true }
            alert(`${name}, you have no reservation, but we'll correct it`)
            console.log(reservations);
            break
        }
    }
}


