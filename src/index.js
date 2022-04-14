const express=require('express');
const app=express();

//settins
app.set('port', process.env.PORT || 3000);

//routes
app.use(require('./routes/file.js'));

//starting server
app.listen(app.get('port'), () => {
    console.log("servidor en puerto: ", app.get('port'));
});