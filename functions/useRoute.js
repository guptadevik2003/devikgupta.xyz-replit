module.exports = ({ app, express }) => {
    express.useRoute = async () => {

        // Import Routes
        const rootRoute = require('../routes/root')
        const apiRoute = require('../routes/api')
        const cybertyRoute = require('../routes/cyberty')

        // Using Routes
        app.use('/', rootRoute)
        app.use('/api', apiRoute)
        app.use('/cyberty', cybertyRoute)

    }
}
