import { getData } from "../getData.js";
import { parseJsonbody } from "../parseJsonbody.js";
import { sendResponse } from "../sendResponse.js";
import { addnewSighting } from "../addnewSighting.js";
import { sanitizeInput } from "../sanitizeInput.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js";


export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}

export async function handlePost(res,req){

    try{
        const parsedBody = await parseJsonbody(req)
        const sanitizedbody = sanitizeInput(parsedBody)
        addnewSighting(parsedBody)
        sightingEvents.emit('sighting-added', sanitizeInput)
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))

    }catch(err){
        sendResponse(res, 400, 'applications/json', JSON.stringify({error: err}))

    }
}

export async function handleNews(req,res){
    
    res.statusCode = 200
    res.setHeader("Content-Type","text/event-stream")
    res.setHeader("Cache-Control","no-cache")
    res.setHeader("Connection","keep-alive")

    setInterval(()=> {
        let randomIndex = Math.floor(Math.random()*stories.length)
        res.write(
            `data: ${JSON.stringify({
                event: 'news-update',
                story: stories[randomIndex]
            })}\n\n`
        )
    }, 3000)
}