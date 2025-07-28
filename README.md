# .doT - AI Chatbot

A secure AI chatbot application using Google's Gemini API.

## Features

- 🤖 AI-powered conversations using Google Gemini
- 🔒 Secure API key management using environment variables
- ⚡ Real-time typing effects for responses
- 📱 Responsive design
- 🎨 Clean and modern UI

## Security Features

- API key stored securely in `.env` file
- Backend server handles all API calls
- No sensitive data exposed to client-side
- `.gitignore` configured to prevent accidental commits of secrets

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "/Users/tanishsen/Desktop/Personal Projects/.doT"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your API key:**
   - The `.env` file is already created with your API key
   - **Important:** Never commit the `.env` file to version control
   - For production, set the `GEMINI_API_KEY` environment variable on your server

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to use the chatbot

## File Structure

```
.doT/
├── index.html          # Main HTML file
├── script.js           # Client-side JavaScript
├── style.css           # Styling
├── server.js           # Backend server (handles API calls)
├── package.json        # Node.js dependencies
├── .env               # Environment variables (API key)
├── .gitignore         # Git ignore rules
└── img/               # Images
    ├── doT.png
    ├── user.jpg
    └── user1.jpg
```

## Security Best Practices

1. **Environment Variables:** API key is stored in `.env` file
2. **Backend Proxy:** All API calls go through your backend server
3. **CORS Protection:** Server configured with appropriate CORS settings
4. **Git Protection:** `.gitignore` prevents committing sensitive files
5. **Error Handling:** Proper error handling without exposing sensitive info

## Development vs Production

### Development
- Uses `nodemon` for auto-restart on file changes
- Run with `npm run dev`

### Production
- Run with `npm start`
- Set environment variables on your hosting platform
- Consider using PM2 or similar process manager

## Environment Variables

Create a `.env` file in the root directory with:

```
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

## API Endpoints

- `GET /` - Serves the main application
- `POST /api/chat` - Handles chat messages securely

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure security best practices are followed
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter any issues, please check:
1. Node.js is installed and up to date
2. All dependencies are installed (`npm install`)
3. The `.env` file exists with your API key
4. The server is running on the correct port

---

**⚠️ Security Notice:** Never commit your `.env` file or expose your API keys in client-side code. Always use a backend server for API calls in production applications.
