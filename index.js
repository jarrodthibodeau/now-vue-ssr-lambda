const renderer = require('vue-server-renderer').createRenderer();
const Vue = require('vue');

module.exports = (req, res) => {
    console.log(req);

    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div> The URL here is... {{ url }} </div>`
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('shrug life')
        }

        res.end(
            `<!DOCTYPE html>
            <html lang="en">
                <head><title>Hello</title></head>
                <body> ${html} </body>
            </html>
            `
        )
    });
}