import { EventEmitter } from "node:events";
import { createAlert } from "../createAlert.js";

export const sightingEvents = new EventEmitter
sightingEvents.on('sighting-added',createAlert)