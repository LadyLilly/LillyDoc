# LillyDoc
Documentation about Lilly.


## This documentation contains all informations about the Framework "Lilly.js"

### Initiate
```javascript
// Require Lilly
const Lilly = require('lilly');

// Create app
const app = Lilly.init();
```

### Routing
```javascript
// GET
app.get('/', (req, res) => {
    res.send('GET request');
});

// POST
app.post('/', (req, res) => {
    res.send('POST request');
});

// PUT
app.put('/', (req, res) => {
    res.send('PUT request');
});

// DELETE
app.delete('/', (req, res) => {
    res.send('DELETE request');
});
```