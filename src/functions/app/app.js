const functions = require('firebase-functions')
const next = require('next')

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf: {  distDir: "next"} })
const handle = app.getRequestHandler()

const nextApp = functions.https.onRequest((request, response) => {
    console.log("File: " + request.originalUrl)
    console.log("dev: ", dev)
    //logs the page.js or resourse requested
    return app.prepare().then(() => handle(request, response))
})

module.exports = nextApp;