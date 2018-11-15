const renderer = require('vue-server-renderer').createRenderer();
const Vue = require('vue');
const { parse } = require('url');

module.exports = (req, res) => {
    const { query } = parse(req.url, true);
    const { character = 'not waluigi' } = query;

    console.log(query);

    const app = new Vue({
        data: {
            character
        },
        template: `<div> Your favorite super smash brother is.... ${{ character }} </div>`
    });

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error');
        }

        res.end(
            `<!DOCTYPE html>
            <html lang="en">
                <head><title>Hello</title></head>
                <body> ${html} </body>
            </html>
            `
        );
    });
}