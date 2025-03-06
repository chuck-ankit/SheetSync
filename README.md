# SheetSync

## Project Overview
SheetSync is a full-stack web application that enables users to create and manage tables dynamically while integrating with Google Sheets for real-time data updates. The dashboard allows authenticated users to create tables, define columns with specific data types, and dynamically update them without unnecessary API calls.

## Features & Requirements
### 1. Authentication (Login & Signup)
- JWT-based authentication.
- Protected routes ensuring only logged-in users can access the dashboard.
- Automatic logout when the token expires.

### 2. Dashboard with Table (Google Sheets Integration)
- Users can create tables by specifying the number of columns and defining column names with data types (Text/Date).
- Integration with Google Sheets to fetch and display data dynamically.
- Data updates in real-time without excessive API calls.

### 3. Dynamic Column Addition
- Users can add new columns dynamically within the dashboard.
- New columns are only reflected in the dashboard (not added to Google Sheets).
- Columns can have predefined types (Text/Date), and changes are persisted.

## Tech Stack
### Frontend
- Next.js
- Tailwind CSS
- Shadcn UI

### Backend
- Node.js (Express.js)
- MongoDB

### Authentication
- JWT-based authentication
- Automatic session expiration handling

## File Structure
```
sheetsync/
│
├── frontend/                    # Next.js frontend
│   ├── .env.local               # Environment variables
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── public/
│   ├── app/
│   │   ├── layout.jsx           # Root layout
│   │   ├── page.jsx             # Landing page (login redirect)
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.jsx     # Login page
│   │   │   └── signup/
│   │   │       └── page.jsx     # Signup page
│   │   └── dashboard/
│   │       ├── page.jsx         # Main dashboard
│   │       └── tables/
│   │           └── [id]/
│   │               └── page.jsx # Individual table view
│   ├── components/
│   │   ├── ui/                  # Shadcn UI components
│   │   ├── auth/
│   │   │   ├── login-form.jsx
│   │   │   └── signup-form.jsx
│   │   ├── dashboard/
│   │   │   ├── create-table-dialog.jsx
│   │   │   ├── tables-list.jsx
│   │   │   └── add-column-dialog.jsx
│   │   └── table/
│   │       ├── dynamic-table.jsx
│   │       ├── column-header.jsx
│   │       └── cell-renderer.jsx
│   ├── lib/
│   │   ├── utils.js             # Utility functions
│   │   ├── auth.js              # Auth helpers
│   │   └── api.js               # API functions
│   ├── hooks/
│   │   ├── use-auth.js          # Auth hooks
│   │   └── use-table-data.js    # Table data hooks with WebSocket
│   └── context/
│       └── auth-context.jsx     # Auth context provider
│
├── backend/                     # Node.js backend
│   ├── .env                     # Environment variables
│   ├── package.json
│   ├── server.js                # Entry point
│   ├── routes/
│   │   ├── auth.routes.js       # Auth routes
│   │   └── table.routes.js      # Table routes
│   ├── controllers/
│   │   ├── auth.controller.js   # Auth controller
│   │   └── table.controller.js  # Table controller
│   ├── models/
│   │   ├── user.model.js        # User model
│   │   └── table.model.js       # Table model
│   ├── middleware/
│   │   ├── auth.middleware.js   # JWT auth middleware
│   │   └── error.middleware.js  # Error handling
│   ├── services/
│   │   ├── sheets.service.js    # Google Sheets API
│   │   └── websocket.service.js # WebSocket for real-time updates
│   └── config/
│       ├── db.config.js         # MongoDB configuration
│       └── sheets.config.js     # Google Sheets configuration
│
└── README.md                    # Project documentation
```

## Deployment
### Frontend
- Deployed on **Vercel**

### Backend
- Deployed on **Render/Heroku**

## Setup Instructions
1. Clone the repository
   ```sh
   git clone https://github.com/chuck-ankit/SheetSync
   cd sheetsync
   ```

2. Install dependencies
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Configure environment variables
   - Set up `.env.local` for frontend and `.env` for backend with required values.

4. Start development servers
   ```sh
   cd frontend
   npm run dev
   ```
   ```sh
   cd backend
   npm start
   ```


---
### Contact
For any queries, feel free to reach out!

