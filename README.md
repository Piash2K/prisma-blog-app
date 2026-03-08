

# 📝 Prisma Blog App

A modern **Node.js + Express + Prisma + PostgreSQL** backend application for managing blog posts, users, and authentication.
This project demonstrates **clean architecture, database management with Prisma ORM, and scalable backend development practices**.

The project is designed to be **lightweight, scalable, and production-ready**, making it suitable for learning **modern backend development workflows**.

---

# 🚀 Features

* 🔐 Authentication using **Better Auth**
* 🗄️ Database management using **Prisma ORM**
* 🐘 PostgreSQL database integration
* ⚡ Fast development workflow using **TSX**
* 🧩 Modular backend architecture
* 🌐 RESTful API design
* 🔒 Environment-based configuration
* 📦 Type-safe database queries
* 🧪 Scalable project structure
* 🔄 Automatic server reload in development

---

# 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**

### Database

* **PostgreSQL**
* **Prisma ORM**

### Authentication

* **Better Auth**

### Development Tools

* **TypeScript**
* **TSX**
* **dotenv**

### Additional Libraries

* **cors**
* **pg**

---

# 📂 Project Structure

```
prisma-blog-app
│
├── prisma
│   ├── schema.prisma
│   └── migrations
│
├── src
│   ├── config
│   │   └── prisma.ts
│   │
│   ├── controllers
│   │
│   ├── routes
│   │
│   ├── services
│   │
│   ├── middlewares
│   │
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/prisma-blog-app.git
```

Navigate into the project directory

```bash
cd prisma-blog-app
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/blog_db"
BETTER_AUTH_SECRET=your_secret_key
```

---

# 🗄️ Prisma Setup

Generate Prisma client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Running the Server

Start development server

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

# 📜 Available Scripts

| Script                   | Description                              |
| ------------------------ | ---------------------------------------- |
| `npm run dev`            | Start development server with hot reload |
| `npx prisma generate`    | Generate Prisma client                   |
| `npx prisma migrate dev` | Run database migrations                  |
| `npx prisma studio`      | Open database GUI                        |

---

# 🔗 API Endpoints (Example)

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### Blogs

```
GET /api/blogs
GET /api/blogs/:id
POST /api/blogs
PUT /api/blogs/:id
DELETE /api/blogs/:id
```

---

# 📈 Future Improvements

* 🧑‍💻 Role-based authorization
* 📷 Image upload for blog posts
* 🔍 Blog search & filtering
* ❤️ Like & comment system
* 📊 Blog analytics
* 🧪 Unit and integration testing
* 🚀 Docker support

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

# 📄 License

This project is licensed under the **ISC License**.

---

