# Institute Registration System

A backend API for managing educational institute registrations.

## Features
- Register different types of educational institutes (Playhouse, School, College, Competitive Exam Center)
- Manage education boards with their mediums and standards
- Get standards based on class category
- Get subjects based on standard and class category

## API Endpoints

### Boards
- `GET /api/boards` - Get all boards

### Institutes
- `POST /api/institutes/register` - Register a new institute
- `GET /api/institutes` - Get all institutes
- `GET /api/institutes/standards/:classCategory` - Get standards for a class category
- `GET /api/institutes/subjects/:classCategory/:standard` - Get subjects for a standard
- `GET /api/institutes/mediums/:boardName` - Get mediums for a board

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Testing

Use Postman or cURL to test the API endpoints.

### Example: Register a School
```json
{
  "type": "School",
  "board": "G.S.E.B",
  "medium": "Gujarati",
  "classCategory": "Secondary",
  "standards": [
    {
      "standard": "9",
      "subjects": ["Mathematics", "Science", "English", "Social Science"]
    }
  ]
}
