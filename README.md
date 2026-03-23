# Go Cloud Functions on EdgeOne Pages - Gorilla Mux Framework

A full-stack demo application built with Next.js + Tailwind CSS frontend and Go Gorilla Mux backend, showcasing how to deploy Go Cloud Functions using the Gorilla Mux router on EdgeOne Pages with RESTful API routing.

## 🚀 Features

- **Gorilla Mux Integration**: Powerful HTTP router with URL pattern matching, subrouters, and middleware support
- **Modern UI Design**: Dark theme with #1c66e5 accent color, responsive layout with interactive elements
- **Interactive API Testing**: Built-in API endpoint panel — click "Call" to test each REST endpoint in real-time
- **RESTful API Design**: Complete Todo CRUD operations with structured subrouters (`/api/todos`)
- **TypeScript Support**: Complete type definitions and type safety on the frontend

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React full-stack framework (with Turbopack)
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component style variant management
- **clsx & tailwind-merge** - CSS class name merging utilities

### Backend
- **Go 1.21** - Cloud Functions runtime
- **Gorilla Mux v1.8** - Powerful HTTP router and URL matcher for Go

## 📁 Project Structure

```
go-mux/
├── cloud-functions/                # Go Cloud Functions source
│   ├── api.go                     # Mux app with all REST API routes
│   ├── go.mod                     # Go module definition
│   └── go.sum                     # Go dependency checksums
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── globals.css           # Global styles (dark theme)
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page (API testing UI)
│   ├── components/               # React components
│   │   └── ui/                   # UI base components
│   │       ├── button.tsx        # Button component
│   │       └── card.tsx          # Card component
│   └── lib/                      # Utility functions
│       └── utils.ts              # Common utilities (cn helper)
├── public/                        # Static assets
│   ├── eo-logo-blue.svg          # EdgeOne logo (blue)
│   └── eo-logo-white.svg         # EdgeOne logo (white)
├── package.json                   # Project configuration
└── README.md                     # Project documentation
```

## 🚀 Quick Start

### Requirements

- Node.js 18+
- pnpm (recommended) or npm
- Go 1.21+ (for local development)

### Install Dependencies

```bash
pnpm install
# or
npm install
```

### Development Mode

```bash
edgeone pages dev
```

Visit [http://localhost:8088](http://localhost:8088) to view the application.

### Build Production Version

```bash
edgeone pages build
```

## 🎯 Core Features

### 1. Gorilla Mux REST API Routes

All API endpoints are defined in a single `cloud-functions/api.go` file using Mux's subrouters:

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Welcome message with route list |
| GET | `/health` | Health check |
| GET | `/api/todos` | List all todos |
| POST | `/api/todos` | Create a new todo |
| GET | `/api/todos/{id}` | Get todo by ID |
| PATCH | `/api/todos/{id}/toggle` | Toggle todo completion |
| DELETE | `/api/todos/{id}` | Delete a todo |

### 2. Interactive API Testing Panel

- 7 pre-configured API endpoint cards with "Call" buttons
- Real-time JSON response display with syntax highlighting
- POST request support with pre-filled JSON body
- Loading states and error handling

### 3. Gorilla Mux Framework Convention

The Go backend uses Mux's standard patterns — subrouters, regex constraints, and middleware:

```go
package main

import (
    "github.com/gorilla/mux"
    "net/http"
)

func main() {
    r := mux.NewRouter()
    r.Use(loggingMiddleware)

    r.HandleFunc("/health", health).Methods("GET")

    api := r.PathPrefix("/api/todos").Subrouter()
    api.HandleFunc("", listTodos).Methods("GET")
    api.HandleFunc("", createTodo).Methods("POST")
    api.HandleFunc("/{id:[0-9]+}", getTodo).Methods("GET")
    api.HandleFunc("/{id:[0-9]+}/toggle", toggleTodo).Methods("PATCH")
    api.HandleFunc("/{id:[0-9]+}", deleteTodo).Methods("DELETE")

    http.ListenAndServe(":9000", r)
}
```

### 4. Data Model

```go
type Todo struct {
    ID        int       `json:"id"`
    Title     string    `json:"title"`
    Completed bool      `json:"completed"`
    CreatedAt time.Time `json:"createdAt"`
}
```

## 🔧 Configuration

### Tailwind CSS Configuration
The project uses Tailwind CSS 4 with custom color variables:

```css
:root {
  --primary: #1c66e5;        /* Primary color */
  --background: #000000;     /* Background color */
  --foreground: #ffffff;     /* Foreground color */
}
```

### Component Styling
Uses `class-variance-authority` to manage component style variants with multiple preset styles.

## 📚 Documentation

- **EdgeOne Pages Official Docs**: [https://edgeone.ai/document/go-functions](https://edgeone.ai/document/go-functions)
- **Gorilla Mux**: [https://github.com/gorilla/mux](https://github.com/gorilla/mux)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🚀 Deployment Guide

### EdgeOne Pages Deployment

1. Push code to GitHub repository
2. Create new project in EdgeOne Pages console
3. Select GitHub repository as source
4. Configure build command: `edgeone pages build`
5. Deploy project

### Go Mux Cloud Function

Create `cloud-functions/api.go` in project root with your Mux application:

```go
package main

import (
    "github.com/gorilla/mux"
    "encoding/json"
    "net/http"
)

func main() {
    r := mux.NewRouter()

    r.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
            "message": "Hello from Gorilla Mux on EdgeOne Pages!",
        })
    }).Methods("GET")

    http.ListenAndServe(":9000", r)
}
```

## Deploy

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=go-mux)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) file for details.
