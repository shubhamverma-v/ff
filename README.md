# Agricultural Assistant - Full Stack Application

A comprehensive agricultural assistance platform built with React (frontend) and Node.js/Express (backend), featuring AI-powered chatbot using Google's Gemini AI to help Indian farmers with agricultural advice, market prices, weather information, and government schemes.

## Features

- 🤖 **AI-Powered Chatbot**: Get agricultural advice in Hindi/English using Google Gemini AI
- 📊 **Market Prices**: Real-time crop prices with trend indicators (55+ crops)
- 🌦️ **Weather Information**: Weather updates for farming decisions
- 🏛️ **Government Schemes**: Information about agricultural schemes and subsidies
- 🌍 **Multi-language Support**: Hindi, English, Punjabi, Marathi
- 📱 **Responsive Design**: Works on all devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- TanStack Query for state management
- Wouter for routing

### Backend
- Node.js with Express
- Google Gemini AI integration
- TypeScript
- In-memory storage

## 🚀 Deploy to Vercel

### Prerequisites
1. **GitHub Account**: Create a repository for your code
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Google AI API Key**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Step 1: Prepare Your Code
1. Extract the provided zip file
2. Initialize git repository:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   \`\`\`
3. Push to GitHub:
   \`\`\`bash
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   \`\`\`

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration from \`vercel.json\`
5. Before deploying, add environment variables:
   - Go to "Environment Variables" section
   - Add: \`GEMINI_API_KEY\` = your_google_ai_api_key
6. Click "Deploy"

### Step 3: Environment Variables
In Vercel dashboard, go to your project → Settings → Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| \`GEMINI_API_KEY\` | Your Google AI API key | Required for AI chatbot functionality |

### Step 4: Custom Domain (Optional)
1. Go to Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## 📁 Project Structure

\`\`\`
.
├── api/                    # Serverless API functions
│   ├── index.js           # Main API handler
│   └── package.json       # API dependencies
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   └── hooks/         # Custom hooks
│   ├── package.json       # Frontend dependencies
│   └── index.html         # HTML template
├── shared/                # Shared TypeScript types
├── vercel.json           # Vercel deployment configuration
└── package.json          # Root dependencies
\`\`\`

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Set environment variables:
   \`\`\`bash
   # Create .env file
   GEMINI_API_KEY=your_google_ai_api_key
   \`\`\`

3. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open http://localhost:5000

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## 🌐 API Endpoints

- \`POST /api/chat\` - AI chatbot responses
- \`GET /api/health\` - Health check

## 🔧 Configuration

### Vercel Configuration (\`vercel.json\`)
- Configures serverless functions for API
- Sets up static file serving for React app
- Handles routing and rewrites for SPA

### Environment Variables
- \`GEMINI_API_KEY\`: Google AI API key (required)

## 🚨 Important Notes

1. **API Limits**: Google Gemini AI has rate limits on free tier
2. **Serverless Functions**: Each API call runs in a serverless environment
3. **Static Files**: Frontend is served from CDN for fast loading
4. **CORS**: Configured for cross-origin requests

## 📝 Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] Vercel account connected to GitHub
- [ ] Environment variables set in Vercel
- [ ] Google AI API key obtained and added
- [ ] Project deployed successfully
- [ ] API endpoints working (check /api/health)
- [ ] Frontend loads correctly
- [ ] Chatbot functionality tested

## 🆘 Troubleshooting

### Common Issues:

1. **Build Failures**: Check package.json dependencies
2. **API Errors**: Verify GEMINI_API_KEY is set correctly
3. **404 Errors**: Check vercel.json routing configuration
4. **CORS Issues**: Ensure API headers are set properly

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Google AI Documentation](https://ai.google.dev/)
- [React Documentation](https://reactjs.org/)

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for Indian farmers using modern web technologies.