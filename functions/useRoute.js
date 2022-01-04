module.exports = ({ app, express }) => {
    express.useRoute = async () => {

        // Import Routes
        const rootRoute = require(`${process.cwd()}/routes/root`)

        // Using Routes
        app.use('/', rootRoute)

    }
}
