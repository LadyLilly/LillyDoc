# LillyDoc
Documentation about Lilly.


## This documentation contains all informations about the Framework "Lilly.js"

### Compile TypeScript
```bash
# Compile TyeScript with NPM (Webpack)
npm run build
```

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

### Internal functions
```javascript
// Handles all user inputs regarding this library
private keyHandler(e: KeyboardEvent) { }

// Appends all returned items to lis
private appendItems(user: any) { }
```