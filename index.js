require('dotenv').config()
let express = require('express')
let app = express();
const Dbconnect = require("./database");
const PORT = process.env.PORT || 5500
const router = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

Dbconnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors());



// app.get('/',(req,res)=>{
//     res.send('hello from pitch please')
// });

app.use('/',router)

app.listen(PORT,()=>{
    console.log('server started')
})