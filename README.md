# TypeRacer Clone

A web-based typing speed test game inspired by TypeRacer. Test your typing speed and accuracy with random passages while racing against time!

## 🚀 Features

- **Random Passages**: Fetch random text passages from a MongoDB database
- **Real-time Typing Test**: Live typing speed and accuracy calculation
- **Visual Progress**: Car animation that moves based on typing progress
- **Responsive Design**: Mobile-friendly interface with sidebar navigation
- **Multiple Pages**:
  - Main typing game
  - How to play instructions
  - About page

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Server**: Express static file serving

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)
- npm (comes with Node.js)

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd typeracer_clone-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up MongoDB**

   - Make sure MongoDB is running on `mongodb://localhost:27017/local`
   - The application will connect to a database named `local`
   - Add some sample text passages to the collection used by the schema

4. **Start the application**

   ```bash
   npm start
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5000`

## 📁 Project Structure

```
typeracer_clone-main/
├── main.js                 # Main server file
├── package.json           # Project dependencies and scripts
├── car.svg               # Car icon asset
├── model/
│   └── schemas.js        # MongoDB schema definitions
├── public/              # Static files served by Express
│   ├── typeracer.html   # Main game page
│   ├── about.html       # About page
│   ├── trhowtoplay.html # Instructions page
│   ├── css/
│   │   ├── style.css    # Main stylesheet
│   │   └── trsyles.css  # Additional styles
│   ├── img/
│   │   ├── 2945.jpg     # Background image
│   │   └── car.svg      # Car icon
│   └── script/
│       └── trscript.js  # Game logic JavaScript
```

## 🎮 How to Play

1. Click the "Start" button to begin the typing test
2. Type the displayed passage as accurately and quickly as possible
3. Watch your car move along the track as you progress
4. Your typing speed (WPM) and accuracy will be calculated in real-time
5. Click "Restart" to try again with a new passage

## 🔧 API Endpoints

- `GET /` - Serves the main typeracer game page
- `GET /passage` - Returns a random text passage from the database

## 🗄️ Database Schema

The application uses a simple MongoDB schema for storing text passages:

```javascript
{
  text: String; // The text passage for typing practice
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Todo/Future Enhancements

- [ ] Add user authentication and profiles
- [ ] Implement leaderboard system
- [ ] Add multiplayer racing functionality
- [ ] Include more typing statistics (accuracy over time, error analysis)
- [ ] Add different difficulty levels
- [ ] Implement typing lessons and practice modes
- [ ] Add sound effects and better animations

## 🐛 Known Issues

- Make sure MongoDB is running before starting the application
- The application expects passages to be pre-populated in the database

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Inspired by the original TypeRacer game
- Thanks to the open source community for the tools and libraries used
