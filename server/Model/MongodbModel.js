
const User = require('../DB/user')

module.exports = {
    add: (data) => {
        let _user = new User(data)
        return _user.save()
    },
    delete: (query) => {
        return User.remove(query)
    }
}
