# ⚙️ Complete Setup & Configuration Guide

## 🎯 Your SnoRelax Project is Now Complete!

### What You Have:
✅ Responsive Design (all phone sizes)  
✅ Dark/Light Theme System  
✅ Tailwind CSS Configured  
✅ Environment Variables Ready  
✅ Complete Documentation  

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install & Configure Server
```bash
cd sno-relax-server
npm install
```

Create `.env` file in `sno-relax-server/`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/snorelax
JWT_SECRET=your_jwt_secret_key
COHERE_API_KEY=your_cohere_api_key
```

Start server:
```bash
npm run dev
```
✅ Server running on http://localhost:5000

---

### Step 2: Configure Client
Client `.env` is already set up in `sno-relax-client/.env`:
```env
REACT_APP_API_BASE=http://localhost:5000
REACT_APP_ENV=development
REACT_APP_DEFAULT_THEME=dark
```

Install dependencies:
```bash
cd sno-relax-client
npm install
```

Start client:
```bash
npm start
```
✅ Client running on http://localhost:3000

---

### Step 3: Test the App
1. Open http://localhost:3000
2. Login with your details (or sign up)
3. Go to Settings to test theme switching
4. Try responsive design on different screen sizes

---

## 📋 Complete File Setup

### Server Configuration (sno-relax-server)

**`.env` file:**
```env
# Port
PORT=5000

# Environment
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/snorelax

# JWT (if using auth)
JWT_SECRET=your-secret-key-change-in-production

# API Keys
COHERE_API_KEY=your-cohere-api-key
GOOGLE_TRANSLATE_KEY=your-google-translate-key
GOOGLE_SHEETS_API_KEY=your-google-sheets-key

# CORS
CLIENT_URLS=http://localhost:3000,http://localhost:3001
```

**`package.json` scripts:**
```bash
npm run dev       # Development with nodemon
npm start         # Production
```

---

### Client Configuration (sno-relax-client)

**`.env` file:**
```env
# For LOCAL development
REACT_APP_API_BASE=http://localhost:5000

# For PRODUCTION
# REACT_APP_API_BASE=https://sno-relax-server.onrender.com

REACT_APP_ENV=development
REACT_APP_DEFAULT_THEME=dark
REACT_APP_ENABLE_SOCKET_IO=true
```

**Files configured:**
- ✅ `tailwind.config.js` - Tailwind setup with custom colors/sizes
- ✅ `postcss.config.js` - PostCSS with Tailwind & Autoprefixer
- ✅ `src/styles/theme.css` - Global CSS variables
- ✅ `src/context/ThemeContext.jsx` - Theme management
- ✅ `src/pages/Settings.jsx` - Settings with theme selector

---

## 🌍 Environment Variables Explained

### Client (.env in sno-relax-client)

| Variable | Purpose | Values |
|----------|---------|--------|
| `REACT_APP_API_BASE` | Backend server URL | `http://localhost:5000` (dev) or deployed URL (prod) |
| `REACT_APP_ENV` | Environment | `development` or `production` |
| `REACT_APP_DEFAULT_THEME` | Initial theme | `dark` or `light` |
| `REACT_APP_ENABLE_SOCKET_IO` | Enable real-time | `true` or `false` |
| `REACT_APP_VERSION` | App version | `1.0.0` |

### Server (.env in sno-relax-server)

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` or `production` |
| `MONGODB_URI` | Database URL | `mongodb://localhost:27017/snorelax` |
| `JWT_SECRET` | Auth token secret | Random strong string |
| `COHERE_API_KEY` | Chatbot API | From Cohere dashboard |
| `CLIENT_URLS` | Allowed origins | Comma-separated URLs |

---

## 🔧 Switching Between Environments

### Local Development
```env
# Client .env
REACT_APP_API_BASE=http://localhost:5000
REACT_APP_ENV=development

# Server .env
NODE_ENV=development
PORT=5000
```

```bash
# Terminal 1: Start server
cd sno-relax-server
npm run dev

# Terminal 2: Start client
cd sno-relax-client
npm start
```

### Production Deployment

**Update Client .env:**
```env
REACT_APP_API_BASE=https://sno-relax-server.onrender.com
REACT_APP_ENV=production
```

**Build:**
```bash
npm run build
```

**Deploy:**
- Client: Upload `build` folder to Vercel/Netlify
- Server: Deploy to Render/Heroku

---

## 🎨 Tailwind CSS Quick Reference

### Custom Responsive Colors:
```jsx
<div className="bg-dark-bg text-dark-text">
  Dark theme colors
</div>

<div className="bg-light-bg text-light-text">
  Light theme colors
</div>
```

### Custom Responsive Sizing:
```jsx
<h1 className="text-clamp-2xl">
  Scales from 1.5rem to 2.5rem
</h1>

<div className="p-clamp-base">
  Padding scales with viewport
</div>
```

### Using with CSS Variables:
```jsx
<div 
  className="p-clamp-base rounded-lg shadow-theme-md"
  style={{ background: 'var(--bg-secondary)' }}
>
  Content
</div>
```

---

## 🧪 Testing Configuration

### Test Local Development:
```bash
# Terminal 1: Server
cd sno-relax-server
npm run dev
# Should show: Server running on http://localhost:5000

# Terminal 2: Client
cd sno-relax-client
npm start
# Should open: http://localhost:3000
```

### Verify Connections:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Try login
4. Check API calls go to http://localhost:5000
5. Should see successful responses

### Test Theme Switching:
1. Go to Settings page
2. Click Dark Mode / Light Mode
3. Colors should change instantly
4. Refresh page - theme should persist

### Test Responsive Design:
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Test different devices
4. Layout should adapt smoothly

---

## 📦 Project Structure

```
SnoRelax/
├── sno-relax-client/          # React frontend
│   ├── .env                   # ✅ Configured
│   ├── tailwind.config.js     # ✅ Configured
│   ├── postcss.config.js      # ✅ Configured
│   ├── src/
│   │   ├── context/
│   │   │   └── ThemeContext.jsx    # ✅ Theme management
│   │   ├── pages/
│   │   │   └── Settings.jsx        # ✅ Settings with theme
│   │   ├── styles/
│   │   │   ├── theme.css           # ✅ CSS variables
│   │   │   └── *.css               # ✅ Responsive styles
│   │   └── index.css               # ✅ Tailwind imports
│   └── package.json           # ✅ Dependencies configured
│
├── sno-relax-server/          # Node.js backend
│   ├── .env                   # Create this
│   ├── index.js               # Server entry
│   ├── routes/                # API routes
│   ├── models/                # Database models
│   └── package.json           # Dependencies
│
├── sno-relax-admin/           # Admin dashboard
│   ├── .env                   # Create if needed
│   └── package.json
│
└── Documentation files        # All setup guides
```

---

## ✅ Complete Checklist

### Client Setup:
- [x] Responsive design implemented
- [x] Dark/Light theme system
- [x] Settings page with theme selector
- [x] CSS variables configured
- [x] Tailwind CSS installed
- [x] tailwind.config.js created
- [x] postcss.config.js created
- [x] .env file configured
- [x] npm install completed

### Server Setup:
- [ ] Create .env file with database/API keys
- [ ] npm install (if not done)
- [ ] MongoDB set up (local or Atlas)
- [ ] API keys obtained (Cohere, Google)
- [ ] Test server connection

### Testing:
- [ ] Server runs on port 5000
- [ ] Client runs on port 3000
- [ ] Can login/signup
- [ ] Theme switching works
- [ ] Responsive design works
- [ ] API calls successful

---

## 🚀 Deploy Commands

### Build Client:
```bash
cd sno-relax-client
npm run build
# Creates optimized build folder
```

### Deploy to Vercel (Client):
```bash
npm install -g vercel
vercel
# Follow prompts to deploy
```

### Deploy to Render (Server):
1. Create Render account
2. Connect GitHub repo
3. Add environment variables
4. Deploy

---

## 📞 Troubleshooting

### "Cannot find module" error?
```bash
npm install
npm start
```

### "Port 5000 already in use"?
```bash
# Kill process on port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in .env
PORT=5001
```

### "API connection failed"?
1. Check if server is running
2. Check REACT_APP_API_BASE in .env
3. Check CORS settings in server

### "Theme not persisting"?
1. Clear browser cache
2. Check localStorage enabled
3. Hard refresh (Ctrl+Shift+R)

---

## 📚 Documentation Index

| Document | Purpose |
|----------|---------|
| START_HERE.md | Quick overview |
| README_RESPONSIVE_THEME.md | User guide |
| RESPONSIVE_DESIGN_GUIDE.md | Technical details |
| TAILWIND_SETUP_COMPLETE.md | Tailwind guide |
| This file | Setup & configuration |

---

## 🎉 You're Ready!

Everything is configured and ready to run:

1. ✅ Server configured with .env template
2. ✅ Client configured with environment variables
3. ✅ Tailwind CSS set up and ready
4. ✅ Responsive design implemented
5. ✅ Theme system ready
6. ✅ Documentation complete

**Next Step:** Follow "Quick Start" above to run your app!

---

## 🏃 TL;DR - Just Run It

```bash
# Terminal 1: Start Server
cd sno-relax-server
npm install
# Create .env (copy template from this file)
npm run dev

# Terminal 2: Start Client
cd sno-relax-client
npm install  # (should be done already)
npm start

# Open http://localhost:3000 🎉
```

**Your app is live!** 🚀
