# Institute Registration System

A backend API for registering different types of educational institutes with MongoDB storage.

## Features
- Register 4 types of institutes:
  - Playhouse (requires age group and activities)
  - School (requires board, medium, class category, and standards with subjects)
  - College (requires university and degree type)
  - Competitive Exam Center (requires exam type)
- Manage education boards (CRUD operations)
- RESTful API endpoints

## API Endpoints

### Institutes
- `POST /api/institutes/register` - Register new institute
- `GET /api/institutes` - Get all registered institutes

### Boards
- `POST /api/boards` - Create new education board
- `GET /api/boards` - Get all active boards

## Requirements
- Node.js
- MongoDB
- npm

## Installation
1. Clone the repository
2. Install dependencies:
```bash
cd backend
npm install