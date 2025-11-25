require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error(' PORT is not defined in .env');
}

app.listen(PORT, () => 
    console.log(`Server running → http://localhost:${PORT}`)
)