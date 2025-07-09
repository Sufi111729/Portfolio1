# 🚀 Full-Stack AI Chatbot Deployment Guide

This guide will help you deploy the AI-powered chatbot with OpenAI GPT-4 integration.

## 📋 Prerequisites

- OpenAI API key (with GPT-4 access)
- Vercel account (for frontend)
- Render account (for backend)
- Git repository

## 🔧 Backend Deployment (Render)

### 1. Prepare Backend

```bash
cd api
npm install
```

### 2. Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Root Directory**: `api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/health`

### 3. Set Environment Variables in Render

```
NODE_ENV=production
PORT=3001
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
MAX_TOKENS=500
TEMPERATURE=0.7
FRONTEND_URL=https://your-vercel-domain.vercel.app
```

### 4. Deploy

- Click "Create Web Service"
- Wait for deployment to complete
- Note your backend URL: `https://your-service-name.onrender.com`

## 🎨 Frontend Deployment (Vercel)

### 1. Set Environment Variable

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-service-name.onrender.com
```

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable in Vercel dashboard
# Go to Project Settings → Environment Variables
# Add: NEXT_PUBLIC_API_URL = https://your-service-name.onrender.com
```

### 3. Update Backend CORS

Go back to Render and update the `FRONTEND_URL` environment variable with your Vercel URL.

## 🔄 Update Backend CORS Settings

In your Render dashboard, update:

```
FRONTEND_URL=https://your-project-name.vercel.app
```

Redeploy the backend service.

## ✅ Verification

### Test Backend

```bash
curl https://your-service-name.onrender.com/health
```

### Test Frontend

1. Visit your Vercel URL
2. Open the AI chatbot
3. Send a test message
4. Verify GPT-4 responses

## 🛠️ Troubleshooting

### Common Issues

**1. CORS Errors**

- Ensure `FRONTEND_URL` is set correctly in Render
- Check browser console for exact error

**2. OpenAI API Errors**

- Verify API key is valid and has GPT-4 access
- Check quota limits in OpenAI dashboard

**3. 500 Errors**

- Check Render logs: Dashboard → Service → Logs
- Verify all environment variables are set

**4. Chatbot Shows Offline**

- Check if backend health endpoint responds
- Verify `NEXT_PUBLIC_API_URL` points to correct backend

### Debug Commands

**Check Backend Health:**

```bash
curl https://your-backend.onrender.com/health
```

**Check Chat Endpoint:**

```bash
curl -X POST https://your-backend.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## 📊 Monitoring

### Backend Logs

- Render Dashboard → Your Service → Logs

### Frontend Logs

- Vercel Dashboard → Your Project → Functions tab

### OpenAI Usage

- OpenAI Dashboard → Usage

## 💰 Cost Considerations

### OpenAI Costs

- GPT-4: ~$0.03-0.06 per 1K tokens
- Implement rate limiting to control costs
- Monitor usage in OpenAI dashboard

### Hosting Costs

- **Render Free Tier**: Good for testing
- **Render Starter ($7/month)**: For production
- **Vercel**: Free for hobby projects

## 🔒 Security Best Practices

1. **Never commit API keys to Git**
2. **Use environment variables for all secrets**
3. **Enable rate limiting (already implemented)**
4. **Monitor API usage regularly**
5. **Set up alerts for unusual activity**

## 🚀 Going Live Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] CORS settings updated
- [ ] Health checks passing
- [ ] Test conversation works
- [ ] Rate limiting tested
- [ ] OpenAI quota monitored
- [ ] Custom domain configured (optional)

## 📱 Features Included

✅ **OpenAI GPT-4 Integration**
✅ **Real-time Messaging UI**
✅ **Typing Indicators**
✅ **Context Memory (5 interactions)**
✅ **Voice Input (Web Speech API)**
✅ **Dark Mode Support**
✅ **Fallback Responses**
✅ **Error Handling**
✅ **Rate Limiting**
✅ **Health Monitoring**

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review service logs
3. Verify environment variables
4. Test endpoints manually

---

**Built with ❤️ by Muhammad Sufiyan**
