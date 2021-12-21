const path = require('path')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)

module.exports = ({ app, express }) => {
    express.appConfig = async () => {

        // const storeSession = new MongoDBSession({
        //     uri: process.env.MONGODB_URL,
        //     collection: 'devikGupta-Replit'
        // })

        app.use(express.static(path.join(__dirname, '../views')))
        app.set('view-engine', 'ejs')
        app.use(express.urlencoded({ extended: false }))
        // app.use(
        //     session({
        //         secret: process.env.SESSION_SECRET,
        //         resave: false,
        //         saveUninitialized: false,
        //         store: storeSession
        //     })
        // )

    }
}
