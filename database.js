const mongoose = require('mongoose');
function DbConnect() {
    const DB_URL = process.env.DB_URL
    
    mongoose.connect(DB_URL,
        {
          useNewUrlParser: true
        },
        () => {
          console.log("database started successfully");
        }
    )
}

module.exports = DbConnect;