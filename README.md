# Weather-Data-Viewer
# Internship Assignment – AI Prototyping

This repository contains my submission for the **AI Intern Assignment** (Aeron Systems).  
It includes a **Weather Data Viewer (Web Utility)** as Part 1 of the assignment.  

## Part 1: Weather Data Viewer

### What it does
- A simple web-based dashboard that allows users to:
  - Enter a city name.
  - Fetch **current weather** (temperature, humidity, wind speed) using the OpenWeatherMap API.
  - Display data in a styled card layout.
  - Show a **temperature forecast chart** (next 24 hours) using Chart.js.
- Users can change cities dynamically.

### Requirements
- **Operating System:** Works on Windows, Linux, macOS (only a browser is required).
- **Languages/Frameworks:** 
  - HTML, CSS, JavaScript (vanilla, no backend needed).
- **Libraries Used:**
  - [Chart.js](https://www.chartjs.org/) (for plotting temperature graphs).
- **APIs:**
  - [OpenWeatherMap API](https://openweathermap.org/api) (free key required).

 ### File Structure

├── index.html # Main webpage
├── style.css # Styling (dashboard layout, buttons, cards)
├── script.js # Logic (API calls + Chart rendering)
└── README.md # Documentation

### How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ai-intern-assignment.git
   cd ai-intern-assignment

2. Get a free API key from OpenWeatherMap

3. Open script.js and replace the placeholder with your API key:
   const apiKey = "YOUR_API_KEY";  // replace with your actual key

4. Open index.html in any modern browser (Chrome, Edge, Firefox).

5. Enter a city name (e.g., Pune, Delhi, London) and click Get Weather.
   Current temperature, humidity, and wind speed will be displayed.
   A chart of the temperature forecast for the next 24 hours will be plotted.

6. AI Tool Usage
   Tools Used
   ChatGPT (OpenAI GPT-5) – Used for generating base HTML, CSS, and JavaScript code.
   Chart.js Docs & OpenWeatherMap Docs – Referenced for API usage and graph plotting.

7. Manual Edits Made
   Inserted my OpenWeatherMap API key.
   Added default city (Pune) so the dashboard is not empty on first load.
   Adjusted CSS for cleaner look (rounded cards, gradient background).
   Tested with different cities and fixed API fetch errors.



https://github.com/user-attachments/assets/4eadffc1-11af-48ee-960e-fb42f569db8e

