const app = require('./app')

app.listen(process.env.PORTNO||3000,()=>{
    console.log("Server listening on ",process.env.PORT)
})

