var ENV = require("./ENV")

module.exports = {
    mongodb: {
        host: ENV == "DEVELOP" ? "mongodb://127.0.0.1" : "mongodb://127.0.0.1:19911",
        db: "Blog",
        username: "laoli",
        password: "laoli"
    }
}
