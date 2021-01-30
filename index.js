require('dotenv').config();
const app = require('./app')
const PORT = 5000

app.listen(PORT, () => console.log(`Server runnig in port: ${PORT}`) );
