# PECS Communication Assistant (Project Artemis) 🗣️

A lightweight, accessible web application that empowers individuals to communicate using Picture Exchange Communication System (PECS) symbols. This assistive technology tool enables users to construct sentences by selecting visual symbols and can vocalize the composed message using text-to-speech synthesis.

## 🌟 Features

### Core Functionality
- **Visual Symbol Library**: Pre-loaded with 40 commonly used PECS symbols across four categories
- **Sentence Builder**: Intuitive interface for constructing meaningful phrases
- **Text-to-Speech**: Built-in voice synthesis to verbalize composed sentences
- **Drag-and-Drop Support**: Symbols can be clicked or dragged into the sentence strip
- **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices

### Symbol Categories
- **Core Words**: Essential communication terms (I want, I need, Help, Yes, No, etc.)
- **Food**: Common food and drink items
- **Activities**: Daily activities and locations
- **Feelings**: Emotional states and physical sensations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pecs-communication-assistant.git
   cd pecs-communication-assistant
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local web server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Or open the file directly in your browser

## 💡 Usage

1. **Select a Category**: Click on the category tabs to browse different symbol sets
2. **Build Your Sentence**: 
   - Click on any symbol to add it to your sentence
   - Or drag and drop symbols into the sentence area
3. **Manage Your Sentence**:
   - Click the × button on any symbol to remove it
   - Use the "Clear" button to start over
4. **Speak Your Sentence**: Click the "Speak" button to hear your sentence aloud

## 🛠️ Technical Architecture

The application follows a clean, modular architecture with separation of concerns:

```
pecs-communication-assistant/
│
├── index.html      # Semantic HTML structure
├── style.css       # Responsive styling and animations
├── script.js       # Application logic and interactivity
└── README.md       # Project documentation
```

### Technologies Used
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No framework dependencies
- **Web Speech API**: Native browser text-to-speech
- **Emoji Unicode**: Lightweight visual symbols

## 🔧 Customization

### Adding New Symbols
Edit the `pecsData` object in `script.js`:

```javascript
const pecsData = {
    yourCategory: [
        { id: 'unique-id', text: 'Display Text', emoji: '🎯' }
    ]
};
```

### Adding New Categories
1. Add your category to the `pecsData` object
2. Add a corresponding button in the HTML:
   ```html
   <button class="category-tab" data-category="yourCategory">Your Category</button>
   ```

### Styling Modifications
All visual styling is contained in `style.css` with clearly commented sections for easy customization.

## 📱 Browser Compatibility

- ✅ Chrome 33+
- ✅ Firefox 49+
- ✅ Safari 7+
- ✅ Edge 14+
- ✅ Mobile browsers (iOS Safari, Chrome for Android)

**Note**: Text-to-speech functionality requires browser support for the Web Speech API.

## ♿ Accessibility

- Semantic HTML elements for screen reader compatibility
- High contrast colors for visual clarity
- Large, touch-friendly interaction targets
- Keyboard navigation support
- Clear visual feedback for all interactions

## 🚧 Roadmap

Future enhancements under consideration:
- [ ] Custom image upload for personalized PECS
- [ ] User profiles and saved phrases
- [ ] Multiple language support
- [ ] Sentence history and favorites
- [ ] Grammar assistance tools
- [ ] Export/sharing capabilities
- [ ] Offline functionality with service workers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the PECS methodology developed by Pyramid Educational Consultants
- Built with accessibility-first principles
- Thanks to the open-source community for continuous inspiration

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Ensure your browser supports the Web Speech API for text-to-speech functionality

---

**Made with ❤️ to enhance communication accessibility**
