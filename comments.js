// Create web server
// 1. Load express module
// 2. Create an express app
// 3. Create a route for the comment list
// 4. Add a comment to the list
// 5. Start the server
// 6. Add a form to the page
// 7. Parse form data
// 8. Add a comment to the list
// 9. Redirect to the comment list

// 1. Load express module
const express = require('express');

// 2. Create an express app
const app = express();
const PORT = 3000;

// 3. Create a route for the comment list
const comments = [];

app.get('/', (req, res) => {
    const commentList = comments.map(comment => `<li>${comment}</li>`).join('\n');
    res.send(`
        <html>
            <body>
                <h1>Comments</h1>
                <ul>
                    ${commentList}
                </ul>
                <form method="POST" action="/comment">
                    <input type="text" name="comment">
                    <button type="submit">Add comment</button>
                </form>
            </body>
        </html>
    `);
});

// 4. Add a comment to the list
app.post('/comment', (req, res) => {
    const comment = req.query.comment;
    comments.push(comment);
    res.redirect('/');
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});