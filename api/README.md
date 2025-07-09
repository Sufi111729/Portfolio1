# 🤖 AI Chatbot Backend

This is the backend API for the AI-powered chatbot with OpenAI GPT-4 integration.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd api
npm install
```

### 2. Set Environment Variables

Create `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
MAX_TOKENS=500
TEMPERATURE=0.7
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

### 4. Test the API

```bash
# Health check
curl http://localhost:3001/health

# Chat endpoint
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## 📡 API Endpoints

- `GET /health` - Server health check
- `POST /api/chat` - Send message to AI
- `DELETE /api/chat/:sessionId` - Clear conversation history
- `GET /api/chat/history/:sessionId` - Get conversation history
- `GET /api/chat/health` - AI service health check
- `GET /api/chat/stats` - Usage statistics

## 🔧 Features

- ✅ OpenAI GPT-4 integration
- ✅ Context memory (5 interactions)
- ✅ Rate limiting
- ✅ Error handling
- ✅ CORS configuration
- ✅ Health monitoring
- ✅ Session management

## 📝 Notes

- **Frontend works without backend**: The frontend gracefully falls back to offline mode if this backend is not running
- **OpenAI API Key required**: You need a valid OpenAI API key with GPT-4 access
- **Rate limiting**: 100 requests per 15 minutes per IP
- **Memory**: Conversation history is stored in-memory (resets on restart)

## 🛠️ Optional Setup

The AI chatbot frontend automatically detects if this backend is available:

- **With backend**: Full AI-powered responses using GPT-4
- **Without backend**: Pre-programmed fallback responses

You only need to run this backend if you want the full AI functionality!
