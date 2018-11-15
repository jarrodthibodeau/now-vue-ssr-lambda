const renderer = require('vue-server-renderer').createRenderer();
const Vue = require('vue');

module.exports = (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div> The URL here is... {{ url }}`
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('shrug life')
        }

        res.end(
            `
                ${html}
            `
        )
    });
}