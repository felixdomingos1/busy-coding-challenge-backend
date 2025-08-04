
# 📄 CV Management System Backend (MCP Server)

A robust backend service for processing, querying, and emailing structured CV information.

---

## 📌 Overview

This backend system provides:

* ✅ **Structured CV querying**
* ✉️ **Email sending via SMTP**
* 🧾 **Comprehensive logging with Winston**
* 🔒 **Input validation and error handling**
* 🧪 **Full testing support**

---

## 🛠️ Core Technologies

* **Node.js** (v18+)
* **TypeScript** (v5+)
* **Express** - Web framework
* **Winston** - Structured logging
* **Nodemailer** - Email integration

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/felixdomingos1/busy-coding-challenge-backend
cd busy-mcp-server/busy-coding-challenge-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file at the project root:

```env
PORT=3000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=your-email@gmail.com
```

---

## 🏁 Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

---

## 📚 API Endpoints

### 1. 🔍 CV Query

**GET** `/api/cv/query?question={your_question}`

#### Example:

```bash
curl "http://localhost:3000/api/cv/query?question=What%20was%20your%20last%20position?"
```

#### Response:

```json
{
  "question": "What was your last position?",
  "answer": "Your last position was Frontend Developer at Company X (Jan 2020 - Present)"
}
```

---

### 2. 📧 Email Sending

**POST** `/api/email/send`
**Headers:** `Content-Type: application/json`

#### Request Body:

```json
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "body": "Email content"
}
```

#### Success Response:

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## 🧪 Testing

### Run all tests

```bash
npm test
```

### Run with coverage

```bash
npm run test:coverage
```

---

## 📂 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility modules (logger, validators)
│   └── app.ts           # Entry point
├── tests/               # Test cases
└── README.md            # Project documentation
```

---

## 🔐 Security Features

* ✅ Input validation on all endpoints
* ✅ CORS configuration
* ✅ Centralized and detailed error logging

---

## 📜 Available Scripts

| Script               | Description                 |
| -------------------- | --------------------------- |
| `npm run dev`        | Run in development mode     |
| `npm run build`      | Compile TypeScript          |
| `npm start`          | Start the production server |
| `npm test`           | Run all tests               |
| `npm run test:watch` | Watch mode for tests        |
| `npm run lint`       | Run code linter             |

---

## 📝 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.

---

## 📞 Support

For issues, suggestions, or contributions, feel free to [open an issue](https://github.com/felixdomingos1/busy-coding-challenge-backend/issues).

---

**Crafted with 💻 by [Félix Domingos](https://github.com/felixdomingos1)**
