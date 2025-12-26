# HAL Escape Room

This project is a proof of concept for an API-based escape room game. The core idea is to create an interactive experience where players must explore and solve puzzles solely through a discoverable API, without any traditional user interface.

## Key Features
- **API-Driven Gameplay:** All interactions and puzzles are accessed and solved via the API.
- **HAL Specification:** The API follows the [HAL (Hypertext Application Language)](https://stateless.group/hal_specification.html) standard, making it self-descriptive and easy to navigate for clients.
- **Discovery-Based Progression:** Players must use the information provided by the API to uncover new endpoints, clues, and ultimately escape the room.

## Technology Stack
- Node.js
- TypeScript
- halson
- vitest

## Build & Deployment
- GitHub Actions
- AWS Lambda
- AWS SAM
