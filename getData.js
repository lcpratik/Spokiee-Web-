import http from "node:http"
import path from "node:path"
import fs from "node:fs/promises"

export async function getData(){

    try{

        const pathjson = path.join('data','data.json')
        const data = await fs.readFile(pathjson, "utf8")
        const parsedData = JSON.parse(data)
        return parsedData

    }catch(err){
        console.log(err)

    }

}