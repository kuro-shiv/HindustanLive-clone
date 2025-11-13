# ⚡ Quick Start - Run SnoRelax on Localhost

## 🎯 30-Second Setup

```powershell
# Terminal 1 - Start Server
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-server"
npm install
npm start

# Terminal 2 - Start Client (after server starts)
cd "c:\Users\dubey\OneDrive\Desktop\Ankit\SnoRelax\sno-relax-client"
npm install
npm start
```

✅ Server runs on: **http://127.0.0.1:5000**
✅ Client runs on: **http://127.0.0.1:3000**
✅ Opens automatically in browser

---

## 📋 Prerequisites Checklist

- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] MongoDB running (local OR Atlas account created)
- [ ] Ports 3000 & 5000 are free

---

## 🔧 Environment Files (Already Configured)

### Client (`.env`)
```
REACT_APP_API_BASE=http://127.0.0.1:5000
REACT_APP_ENV=development
REACT_APP_DEFAULT_THEME=dark
REACT_APP_ENABLE_SOCKET_IO=true
```

### Server (`.env`)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/snorelax
CORS_ORIGIN_DEVELOPMENT=http://127.0.0.1:3000
```

---

## ✨ Test Features

### 🌙 Theme Switching
1. Login → Dashboard → Settings (⚙️ icon)
2. Select Dark Mode or Light Mode
3. Theme changes instantly!

### 📱 Responsive Design
1. Press `F12` in browser
2. Press `Ctrl+Shift+M` (toggle device toolbar)
3. Test on iPhone 12, iPad, Desktop sizes

### 💬 Real-time Chat (Socket.IO)
1. Navigate to Chat page
2. Send messages
3. Should appear in real-time

---

## 🆘 Common Issues

| Issue | Fix |
|-------|-----|
| "Cannot find module" | Run `npm install` in that folder |
| Port already in use | Kill process or use different port |
| MongoDB connection failed | Ensure MongoDB is running |
| CORS errors | Check `.env` API_BASE URL matches server CORS |
| Theme not saving | Clear browser cache & check localStorage |

---

## 📞 Useful Commands

```powershell
# Check if port is in use
netstat -ano | findstr :5000

# Kill all Node processes
Get-Process node | Stop-Process -Force

# Check MongoDB is running
Get-Process mongod

# Clear npm cache
npm cache clean --force

# Fresh install
rm -r node_modules, package-lock.json; npm install
```

---

## 🎉 Success Indicators

✅ Server logs show: "Server running on port 5000"
✅ Browser opens to http://127.0.0.1:3000
✅ Login page displays with theme toggle visible
✅ No red error messages in browser console
✅ Settings page loads with theme options
✅ Switching theme works instantly

---

## 📖 Full Documentation

For detailed setup: Read **LOCALHOST_SETUP_GUIDE.md**

---

**Ready to start? Open 2 terminals and follow the commands above! 🚀**

