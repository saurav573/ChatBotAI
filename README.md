# Sara - Voice Assistant Chatbot

A simple voice-controlled virtual assistant chatbot built with HTML, CSS, and JavaScript. Sara can understand voice commands and respond with speech synthesis.

## Features

- **Voice Recognition**: Uses Web Speech API for voice input
- **Speech Synthesis**: Responds with natural-sounding voice output
- **Time-based Greetings**: Greets users based on current time (morning/afternoon/evening)
- **Basic Commands**:
  - Hello/Goodbye responses
  - Self-introduction
  - Open YouTube
- **Responsive Design**: Modern UI with gradient buttons and animations
- **Microphone Integration**: Requests microphone permissions for voice input

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling with gradients, shadows, and animations
- **JavaScript**: Core functionality including:
  - Web Speech API (SpeechRecognition and SpeechSynthesis)
  - DOM manipulation
  - Event handling

## Prerequisites

- Modern web browser with Web Speech API support (Chrome, Edge, Safari)
- Microphone access (required for voice input)
- HTTPS connection (required for microphone access in most browsers)

## How to Run

1. **Clone or Download** the project files to your local machine

2. **Open in Browser**:
   - Open `bot.html` in your web browser
   - For best experience, serve the files through a local web server (due to microphone permissions)

3. **Grant Permissions**:
   - Allow microphone access when prompted
   - The chatbot will greet you based on the current time

4. **Start Talking**:
   - Click the "Click Here!" button
   - Speak clearly into your microphone
   - Try commands like:
     - "Hello Sara"
     - "Who are you?"
     - "Open YouTube"
     - "Goodbye"

## File Structure

```
chatbotAI/
├── bot.html      # Main HTML file
├── bot.css       # Stylesheet
├── bot.js        # JavaScript functionality
└── imageAi.avif  # Favicon
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Safari
- ❌ Firefox (limited Web Speech API support)

## Known Limitations

- Requires microphone permissions
- Works best in quiet environments
- Limited command vocabulary (can be extended)
- Speech recognition accuracy depends on accent and pronunciation

## Future Enhancements

- Add more voice commands
- Integrate with external APIs (weather, news, etc.)
- Add conversation memory
- Support multiple languages
- Add visual feedback animations

## Author

Created by Saurav

## License

This project is open source and available under the [MIT License](LICENSE).</content>
<parameter name="filePath">c:\S_SYSTEM\projects\chatbotAI\README.md
