const express = require('express');
const errorHandler = require('../middleware/errorHandler');
const router = require('../routes/index');

const app = express();
app.use(express.json());
app.use('/api/calculate',router);
// Error Handler Middleware
app.use(errorHandler);



app.listen(4000, () => {
    console.log('Server is listening on PORT 4000')
})