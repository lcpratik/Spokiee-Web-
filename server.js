import http from 'node:http'
import {serveStatic} from "./serveStatic.js"
import { getData } from './getData.js'
import fs from "node:fs/promises"
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
import { handleNews } from './handlers/routeHandlers.js'



const PORT = 6969

const __dirname = import.meta.dirname

console.log(await getData())

let Server = http.createServer(async(req,res)=>{

    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
        else if(req.method === "POST")
        {
            return await handlePost(res,req)
        }
    }

    else if (req.url === "/api/news"){
        return await handleNews(req,res)
    }

    else if(!req.url.startsWith("/api"))
    {
        await serveStatic(req,res,__dirname)
    }
})

Server.listen(PORT, ()=> console.log(6969))