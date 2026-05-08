# Spokiee Web

A ghost sighting community platform built from scratch with a custom Node.js HTTP server — no Express or external frameworks. Users can submit sightings, browse all reports, and receive live news headlines via Server-Sent Events.

## Features

- Submit ghost sightings (title, location, date/time, description)
- Browse all submitted sightings with expandable cards
- Live news feed powered by Server-Sent Events (SSE)
- Input sanitization on all POST data
- Custom static file server with 404 handling
- Event-driven architecture using Node.js `EventEmitter`

## Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Backend   | Node.js (built-in `http` module)|
| Frontend  | HTML, CSS, Vanilla JavaScript   |
| Storage   | JSON file (`data/data.json`)    |
| Events    | Node.js `EventEmitter`          |
| Streaming | Server-Sent Events (SSE)        |

## Project Structure

```
spokiee-web-/
├── server.js              # HTTP server and routing
├── handlers/
│   └── routeHandlers.js   # GET, POST, and SSE news handlers
├── events/
│   └── sightingEvents.js  # EventEmitter for new sighting alerts
├── data/
│   ├── data.json          # Persisted sightings
│   └── stories.js         # News headlines for SSE feed
├── public/                # Frontend (HTML, CSS, JS)
│   ├── index.html / index.js
│   ├── sightings.html
│   ├── upload-sighting.html / upload-sighting.js
│   ├── news.html / news.js
│   └── 404.html
├── getData.js             # Reads sightings from JSON
├── sanitizeInput.js       # Strips unsafe HTML from POST body
├── serveStatic.js         # Serves files from /public
├── sendResponse.js        # Wraps res.end with status + headers
├── parseJsonbody.js       # Parses incoming JSON request body
└── createAlert.js         # Alert emitted on new sighting
```

## Getting Started

### Prerequisites

- Node.js v18+

### Install & Run

```bash
git clone https://github.com/lcpratik/Spokiee-Web-.git
cd spokiee-web-
npm install
node server.js
```

Then open [http://localhost:6969](http://localhost:6969) in your browser.

## Author

**Pratik Lamichhane** · [GitHub](https://github.com/lcpratik) · [LinkedIn](https://linkedin.com/in/lcpratik)
