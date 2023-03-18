const mongoose = require('mongoose');

const url = "mongodb+srv://hao2312:Wg6HQR0AYXaAGMmL@cluster0.lljncgi.mongodb.net/FastfoodWeb?retryWrites=true&w=majority";

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connect db success!");
}).catch((err) => {
    throw err;
    //console.log(err);
});

module.exports = mongoose;