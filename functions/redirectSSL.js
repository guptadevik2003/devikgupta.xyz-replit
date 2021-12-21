const redirectSSL = require('redirect-ssl')
const buildMode = process.env.BUILD_MODE

module.exports = ({ app, express }) => {
    express.redirectSSL = async () => {

        if (buildMode === 'development') {
            console.log(`[${buildMode.toUpperCase()}] RedirectSSL Disabled!`)
        }
        if (buildMode === 'production') {
            app.use(redirectSSL)
            console.log(`[${buildMode.toUpperCase()}] RedirectSSL Enabled!`)
        }

    }
}
