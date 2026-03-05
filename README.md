# Project Management Application

A full-stack web application for managing projects and tasks, built with Django REST Framework and React.

> **Note:** This is a redo of the first project, implementing improved features and architecture.

## Features

- **Project Management**
  - Create, view, and manage projects
  - Track project status (In Progress, Completed)
  - Monitor hours spent on each project
  - Set start and end dates for projects
  - Add detailed project descriptions

- **Task Management**
  - Create tasks associated with specific projects
  - Add task descriptions
  - Set task start and end dates
  - Track tasks by user

- **User Interface**
  - Responsive design with React Bootstrap
  - Clean and intuitive navigation
  - Modal-based task creation
  - Project detail view with associated tasks

## Tech Stack

### Backend

- **Django 6.0.3** - Web framework
- **Django REST Framework 3.16.1** - API development
- **SQLite** - Database
- **django-cors-headers** - CORS handling

### Frontend

- **React 19.2.4** - UI library
- **React Router DOM 7.13.1** - Navigation
- **React Bootstrap 2.10.10** - UI components
- **Axios 1.13.6** - HTTP client
- **Redux** - State management
- **Bootstrap** - Styling

## Project Structure

```
Quiz4/
├── backend/                 # Django backend
│   ├── backend/            # Django project settings
│   │   ├── settings.py     # Project configuration
│   │   ├── urls.py         # Main URL configuration
│   │   └── wsgi.py         # WSGI configuration
│   ├── mainapp/            # Main application
│   │   ├── models.py       # Project and Task models
│   │   ├── serializers.py  # DRF serializers
│   │   ├── views.py        # API views
│   │   ├── urls.py         # App URL configuration
│   │   └── migrations/     # Database migrations
│   ├── manage.py           # Django management script
│   ├── requirements.txt    # Python dependencies
│   └── db.sqlite3          # SQLite database
│
└── frontend/               # React frontend
    ├── public/             # Static files
    ├── src/
    │   ├── components/     # Reusable components
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Project.jsx
    │   │   ├── TaskCreateModal.jsx
    │   │   └── FormContainer.jsx
    │   ├── screens/        # Page components
    │   │   ├── HomeScreen.jsx
    │   │   ├── DetailScreen.jsx
    │   │   └── ProjectCreateScreen.jsx
    │   ├── actions/        # Redux actions
    │   ├── reducers/       # Redux reducers
    │   ├── constants/      # Redux constants
    │   ├── App.js          # Main app component
    │   └── index.js        # Entry point
    └── package.json        # Node dependencies
```

## Installation & Setup

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
# Windows
python -m venv myvenv
myvenv\Scripts\activate

# macOS/Linux
python3 -m venv myvenv
source myvenv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run migrations:

```bash
python manage.py migrate
```

5. Create a superuser (optional):

```bash
python manage.py createsuperuser
```

6. Start the development server:

```bash
python manage.py runserver
```

The backend API will be available at `http://127.0.0.1:8000/`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The frontend application will be available at `http://localhost:3000/`

## Usage

1. Start both the backend and frontend servers
2. Access the application at `http://localhost:3000/`
3. Create new projects from the home screen
4. View project details and add tasks to projects
5. Track project status and hours spent

## API Endpoints

### Projects

- `GET /api/projects/` - List all projects
- `POST /api/projects/` - Create a new project
- `GET /api/projects/:id/` - Get project details
- `PUT /api/projects/:id/` - Update a project
- `DELETE /api/projects/:id/` - Delete a project

### Tasks

- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create a new task
- `GET /api/tasks/:id/` - Get task details
- `PUT /api/tasks/:id/` - Update a task
- `DELETE /api/tasks/:id/` - Delete a task

## Models

### Project Model

- `project_name` - Name of the project
- `project_description` - Detailed description
- `status` - Project status (In Progress/Completed)
- `hours_spent` - Total hours spent on the project
- `start_date` - Project start date
- `end_date` - Project end date
- `user` - Associated user (Foreign Key)

### Task Model

- `task_name` - Name of the task
- `task_description` - Detailed description
- `start_date` - Task start date
- `end_date` - Task end date
- `project` - Associated project (Foreign Key)
- `user` - Associated user (Foreign Key)

## Development

### Running Tests

```bash
# Backend tests
cd backend
python manage.py test

# Frontend tests
cd frontend
npm test
```

### Building for Production

```bash
# Frontend build
cd frontend
npm run build
```

## License

This project is created for educational purposes.

## Author

Pauleen Tabor

---

_This is a redo of the first project with enhanced features and improved implementation._
