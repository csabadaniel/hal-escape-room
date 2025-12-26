# HAL Escape Room

This project is a proof of concept for an API-based escape room game. The core idea is to create an interactive experience where players must explore and solve puzzles solely through a discoverable API, without any traditional user interface.

When you are ready to play, start the app (see [Running the Application](#running-the-application)) and open the [story.md](story.md) file for instructions to begin the game. Follow the story and solve the puzzles using the API as described.

## Key Features
- **API-Driven Gameplay:** All interactions and puzzles are accessed and solved via the API.
- **HAL Specification:** The API follows the [HAL (Hypertext Application Language)](https://stateless.group/hal_specification.html) standard, making it self-descriptive and easy to navigate for clients.
- **Discovery-Based Progression:** Players must use the information provided by the API to uncover new endpoints, clues, and ultimately escape the room.

## Technology Stack
- Node.js
- TypeScript
- express
- halson
- vitest


## Build & Deployment
- GitHub Actions
- AWS Lambda
- AWS SAM

---

## Running the Application

### Build the app
```
npm run build
```

### Start the app (in the background)
```
npm run start
```

### Stop the app
```
npm run stop
```

### Run tests
```
npm test
```
