import express from 'express';
const routes = express();

routes.get('/',(request,response)=>{
    return response.json({message: 'Hello World'});
})

export default routes;