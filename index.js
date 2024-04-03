const JSONServer = require('json-server')//similar to import...
const MPServer =  JSONServer.create()//creates a jsonserver
const router = JSONServer.router('db.json')//router connects index.js and database
const middleware = JSONServer.defaults()//converts js to json

const PORT=3000 || process.env.PORT

MPServer.use(middleware) 
MPServer.use(router)



MPServer.listen(PORT,()=>{
  console.log((`media-player server started at port :${PORT},and waiting for the client request.....`));
})