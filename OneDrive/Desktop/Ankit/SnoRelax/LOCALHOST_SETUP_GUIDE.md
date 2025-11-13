# 🚀 SnoRelax Localhost Setup & Run Guide

Complete step-by-step guide to run the entire SnoRelax application stack on localhost with responsive design and theme switching.

---

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org)
- ✅ **npm** (comes with Node.js)
- ✅ **MongoDB** (local or Atlas cloud account)
  - Local: [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community)
  - Cloud: [Create free Atlas account](https://cloud.mongodb.com)

Verify installation:
```powershell
node --version
npm --version
```

---

## 🗄️ Step 1: MongoDB Setup

### Option A: Local MongoDB

1. **Install MongoDB Community Edition**
   - Download from: https://www.mongodb.com/try/download/community
   - Run installer with default settings
   - MongoDB runs on `localhost:27017` by default

2. **Verify MongoDB is running**
   ```powershell
   # Check if MongoDB is running (Windows)
   Get-Process mongod
   ```

### Option B: MongoDB Atlas (Cloud)

1. **Create account**: https://cloud.mongodb.com/user/register
2. **Create cluster**: 
   - Choose "FREE TIER" (M0)
   - Select region closest to you
3. **Get connection string**:
   - Click "Connect" button
   - Choose "Drivers" → "Node.js"
   - Copy connection string
   - Replace `<username>` and `<password>` with your credentials
4. **Update server `.env`**:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/snorelax?retryWrites=true&w=majority
   ```

---

## 🔧 Step 2: Server Setup (Backend)

Navigate to server directory:
```powershell
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-server"
```

### Install dependencies:
```powershell
npm install
```

### Verify `.env` file configuration:

Check `sno-relax-server/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/snorelax
CORS_ORIGIN_DEVELOPMENT=http://127.0.0.1:3000,http://localhost:3000
SOCKET_IO_ENABLED=true
COHERE_API_KEY=WVXoFOuthbmAqDjKy3cIMZKa6F37LR0A4SY3BEDD
```

**✅ Everything configured!**

---

## 🎨 Step 3: Client Setup (Frontend)

Navigate to client directory:
```powershell
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-client"
```

### Install dependencies:
```powershell
npm install
```

### Verify `.env` file configuration:

Check `sno-relax-client/.env`:
```env
REACT_APP_API_BASE=http://127.0.0.1:5000
REACT_APP_SOCKET_IO_URL=http://127.0.0.1:5000
REACT_APP_ENV=development
REACT_APP_DEFAULT_THEME=dark
REACT_APP_ENABLE_SOCKET_IO=true
```

**✅ Everything configured!**

---

## ▶️ Step 4: Running the Application

### **Option 1: Run in Two Separate Terminals** (Recommended)

#### Terminal 1 - Server:
```powershell
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-server"
npm start
```

**Expected output:**
```
Server running on port 5000
✓ MongoDB connected
✓ CORS enabled for http://127.0.0.1:3000
✓ Socket.IO initialized
```

#### Terminal 2 - Client:
```powershell
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-client"
npm start
```

**Expected output:**
```
Compiled successfully!
On Your Network: http://192.168.x.x:3000
Local: http://127.0.0.1:3000
```

Browser will automatically open to `http://127.0.0.1:3000`

---

### **Option 2: Run Both in One Terminal** (Advanced)

In PowerShell (supports parallel execution):

```powershell
# Start server in background
Start-Process -FilePath powershell -ArgumentList "cd 'c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-server'; npm start"

# Wait 3 seconds for server to start
Start-Sleep -Seconds 3

# Start client
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-client"
npm start
```

---

## 🧪 Step 5: Verify Everything is Working

### ✅ Check Server Health:

Open new PowerShell tab:
```powershell
curl http://127.0.0.1:5000/api/health
```

Expected response: Server is running

### ✅ Check Client:

1. Open browser: `http://127.0.0.1:3000`
2. You should see the **SnoRelax Login Page**

### ✅ Test Theme Switching:

1. Login with credentials
2. Navigate to **Dashboard**
3. Click **Settings** (gear icon in top right)
4. Select **Dark Mode** or **Light Mode**
5. Theme should change immediately ✨

### ✅ Test Responsive Design:

1. In browser DevTools: `F12`
2. Toggle **Device Toolbar** (Ctrl+Shift+M)
3. Test different device sizes:
   - iPhone 12: 390px × 844px
   - iPad Pro: 1024px × 1366px
   - Desktop: 1920px × 1080px
4. Layout should adjust smoothly for each size

### ✅ Test Socket.IO Connection:

1. Open **Chat** page
2. Try sending a message
3. Check browser console for Socket.IO connection logs

---

## 🔌 Port Configuration

| Service | Port | URL |
|---------|------|-----|
| **Backend (Server)** | `5000` | `http://127.0.0.1:5000` |
| **Frontend (Client)** | `3000` | `http://127.0.0.1:3000` |
| **MongoDB (Local)** | `27017` | `mongodb://localhost:27017` |

**⚠️ Important**: Make sure ports 3000 and 5000 are free (not used by other applications)

To check if ports are in use:
```powershell
netstat -ano | findstr :3000
netstat -ano | findstr :5000
```

---

## 🐛 Troubleshooting

### ❌ "Cannot find module" error

**Solution:**
```powershell
# Clear node_modules and reinstall
rm -r node_modules
rm package-lock.json
npm install
```

### ❌ Port 3000 or 5000 already in use

**Solution 1 - Find and stop the process:**
```powershell
# Find process using port 5000
Get-Process | Where-Object { $_.ProcessName -like "*node*" } | Stop-Process -Force

# Or specify the port using a different port:
# In client: npm start -- --port 3001
# In server: PORT=5001 npm start
```

### ❌ MongoDB connection refused

**Solution:**
```powershell
# Make sure MongoDB is running
# Windows - Check Services (Services.msc) for "MongoDB"
# Or start MongoDB manually if installed locally

# Test connection
mongo mongodb://localhost:27017
```

### ❌ CORS errors in browser console

**Solution:** Ensure `.env` files are properly configured:
- Client `.env`: `REACT_APP_API_BASE=http://127.0.0.1:5000`
- Server `.env`: `CORS_ORIGIN_DEVELOPMENT=http://127.0.0.1:3000`

### ❌ Theme not persisting after refresh

**Solution:** Check browser localStorage:
1. Open DevTools: `F12`
2. Go to "Application" → "Local Storage"
3. Find `snorelax_theme` key
4. Should have value `"dark"` or `"light"`

If missing, theme context may need reset.

### ❌ API calls returning 404

**Solution:**
1. Verify server is running on port 5000
2. Check server console for errors
3. Verify `.env` files match port configurations
4. Try `curl http://127.0.0.1:5000/api/health` in terminal

---

## 📁 File Reference

### Client Configuration
- `.env` - Environment variables (API URL, theme settings)
- `src/context/ThemeContext.jsx` - Theme state management
- `src/pages/Settings.jsx` - Settings page with theme selector
- `src/styles/theme.css` - CSS variables for dark/light themes
- `tailwind.config.js` - Tailwind CSS configuration

### Server Configuration
- `.env` - MongoDB URI, API keys, CORS settings
- `index.js` - Server entry point (port 5000, CORS setup)
- `sockets/communitySocket.js` - Socket.IO real-time features
- `models/` - MongoDB schemas

---

## 🚀 Next Steps

After successful setup:

1. **Explore the app:**
   - Login with your credentials
   - Navigate through Dashboard, Chat, Mood Tracker, etc.
   - Test responsive design on different screen sizes
   - Switch between Dark and Light themes

2. **Customize:**
   - Modify theme colors in `src/styles/theme.css`
   - Adjust responsive breakpoints in CSS files
   - Update API endpoints in `.env`

3. **Deploy (Later):**
   - Update `.env` for production URLs
   - Deploy server to Heroku/Render/Vercel
   - Deploy client to Vercel/Netlify

---

## 📞 Helpful Commands

### Check Node/npm versions:
```powershell
node --version
npm --version
```

### Clear npm cache:
```powershell
npm cache clean --force
```

### Install specific package:
```powershell
npm install package-name@version
```

### Update npm:
```powershell
npm install -g npm@latest
```

### Check what's running on a port:
```powershell
Get-NetTCPConnection -State Listen | Select LocalAddress,LocalPort,OwningProcess | Where-Object {$_.LocalPort -eq 5000}
```

---

## ✨ Features Implemented

✅ **Responsive Design** (5 breakpoints: 360px, 480px, 768px, 1024px, 1920px)
✅ **Dark/Light Theme** (Settings page, localStorage persistence)
✅ **Tailwind CSS** (Utility-first styling with custom config)
✅ **Socket.IO** (Real-time chat and notifications)
✅ **MongoDB** (Local or Atlas)
✅ **CSS Variables** (16 theme variables for color/shadow)
✅ **CORS Enabled** (localhost:3000 ↔ localhost:5000)

---

## 📚 Documentation Files

- `COMPLETE_SETUP_GUIDE.md` - Full implementation details
- `TAILWIND_SETUP_COMPLETE.md` - Tailwind CSS guide
- `RESPONSIVE_DESIGN_GUIDE.md` - Breakpoints and media queries
- `THEME_SYSTEM_GUIDE.md` - Theme implementation
- `INSTALLATION_COMPLETE.md` - Summary of all changes

---

**🎉 You're all set! Enjoy using SnoRelax with full responsive design and theme switching!**

