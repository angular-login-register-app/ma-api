const app = require('./app')
const config = require('./config/config')

app.listen(config.port, function(err){
    if(err) throw err
    console.log(`App listening on port ${config.port}`)
})