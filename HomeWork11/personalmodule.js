const personal = {
    greeting: function (username) {
        let current = new Date();
        let hour = current.getHours();
        let greeting

        if (hour >= 5 && hour < 11) {
            greeting = "Good morning"
        } else if (hour >= 11 && hour < 17) {
            greeting = "Good day"
        } else if (hour >= 17 && hour < 23) {
            greeting = "Good evening"
        } else {
            greeting = "Good night"
        }

        return `${greeting}, ${username}`
    }
}

module.exports = personal