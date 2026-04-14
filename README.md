# TypeRacer Clone

A browser-based typing speed game inspired by [TypeRacer](https://play.typeracer.com/). Test and improve your typing speed (WPM) by racing against the clock while a car moves along a track as you type.

## Features

- Random passage fetched from a MongoDB database for each race
- Animated car that advances along a track as you type each word correctly
- Real-time input validation (highlights correct/incorrect typing)
- Words-per-minute (WPM) calculation displayed at the end of each race
- Responsive navigation with a collapsible sidebar for mobile devices
- How to Play and About pages

## Tech Stack

| Layer    | Technology          |
|----------|---------------------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Backend  | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |

## Project Structure

```
typeracer_clone/
├── main.js               # Express server entry point
├── model/
│   └── schemas.js        # Mongoose schema for passages
├── public/
│   ├── typeracer.html    # Main game page
│   ├── about.html        # About page
│   ├── trhowtoplay.html  # How to Play page
│   ├── css/
│   │   ├── style.css     # Global styles
│   │   └── trsyles.css   # Game-specific styles
│   └── script/
│       └── trscript.js   # Game logic (fetch passage, WPM, car movement)
├── car.svg               # Car graphic used on the race track
├── package.json
└── package-lock.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) running locally on the default port `27017`

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bhhvshh/typeracer_clone.git
   cd typeracer_clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Seed the database**

   Start MongoDB and insert at least one passage document into the `local` database under the `schemas` collection:

   ```js
   // Example document
   { text: "The quick brown fox jumps over the lazy dog." }
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Open the app**

   Navigate to [http://localhost:5000](http://localhost:5000) in your browser.

## How to Play

1. Click **Start** on the main page to load a random passage.
2. Type the displayed text as accurately and quickly as possible.
3. The car on the track moves forward each time you complete a word correctly.
4. When you finish the passage, your **WPM** score is displayed.
5. Click **Restart** to play again with a new passage.

## API Endpoints

| Method | Endpoint   | Description                         |
|--------|------------|-------------------------------------|
| GET    | `/`        | Serves the main game page           |
| GET    | `/passage` | Returns a random passage from MongoDB |

## License

This project is open source. Feel free to use and modify it.
