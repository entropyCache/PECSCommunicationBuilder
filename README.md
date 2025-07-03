# PECS Communication Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Browser Support](https://img.shields.io/badge/Browser-Chrome%20%7C%20Firefox%20%7C%20Safari%20%7C%20Edge-brightgreen)](https://github.com/yourusername/pecs-communication-builder)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1-blue)](https://www.w3.org/WAI/WCAG21/quickref/)

A comprehensive web-based Picture Exchange Communication System (PECS) application designed to empower non-verbal individuals through visual communication. This tool transforms pictures into spoken language, bridging the gap between thought and expression.

![PECS Communication Builder Screenshot](docs/screenshot.png)

## 🌟 Overview

The PECS Communication Builder is an assistive technology application that enables users to construct sentences by arranging visual symbols (PECS cards), which are then converted to speech. Originally developed for individuals with autism, developmental delays, or other communication challenges, this digital implementation extends the accessibility and functionality of traditional PECS systems.

### Why PECS Communication Builder?

- **Immediate Audio Feedback**: Every interaction produces instant speech output
- **Customizable Vocabulary**: Create personalized communication symbols
- **Portable Communication**: Works on any device with a web browser
- **Print-Ready**: Generate physical PECS cards for offline use
- **Natural Speech**: Advanced text-to-speech with child-friendly voices

## ✨ Features

### Core Communication Features

#### 🗣️ Interactive Sentence Building
- **Drag-and-Drop Interface**: Intuitive touch-based interaction for constructing sentences
- **Real-Time Speech**: Each PECS card speaks its label when placed in the sentence builder
- **Visual Feedback**: Color-coded visual cues and animations for user confirmation
- **Sentence Playback**: Complete sentences spoken with natural pauses and intonation

#### 🎨 Custom PECS Creator
- **Shape-Based Design**: Choose from 8 fundamental shapes (circle, square, triangle, star, heart, house, car, tree)
- **Color Customization**: Dual color control for shape and background
- **Text Integration**: Add custom labels with adjustable font sizes
- **Real-Time Preview**: See your creation before adding to library
- **Image Upload**: Support for custom photographs and illustrations

#### 🔊 Advanced Speech Synthesis
- **Natural Voice Selection**: Automatically selects child-friendly, clear voices
- **Optimized Speech Parameters**: Carefully tuned rate, pitch, and volume for clarity
- **Contextual Speech Settings**: Different settings for individual words vs. complete sentences
- **Cross-Platform Compatibility**: Works with all major browser speech engines

### Accessibility Features

#### 📱 Universal Device Support
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile
- **Touch-First Interface**: Designed primarily for touch interaction
- **Keyboard Navigation**: Full keyboard accessibility for all functions
- **Screen Reader Compatible**: Semantic HTML structure for assistive technologies

#### 🖨️ Physical Communication Aids
- **Print All PECS**: Generate comprehensive reference sheets
- **Sentence Printing**: Create focused printouts of constructed sentences
- **PECS Book Creation**: Organized, categorized communication books
- **Professional Layout**: Print-optimized formatting for clarity and durability

## 🚀 Getting Started

### System Requirements

- **Web Browser**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Device**: Any device with touch or mouse input
- **Internet**: No internet required after initial load
- **Storage**: Minimal local storage for custom PECS (optional)

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/pecs-communication-builder.git
   cd pecs-communication-builder
   ```

2. **Launch the Application**
   ```bash
   # Open index.html in your preferred browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **Start Communicating**
   - Use the pre-loaded PECS cards in the Picture Library
   - Drag cards to the Sentence Builder area
   - Listen as each card is spoken when placed
   - Click "Speak" to hear your complete sentence

## 📖 Detailed Usage Guide

### Building Your First Sentence

1. **Explore the Picture Library**: Default cards include common words like "I", "want", "drink", "food", "help"
2. **Drag and Drop**: Touch or click and drag a PECS card to the Sentence Builder
3. **Listen**: Each card speaks its label immediately when placed
4. **Build Sentences**: Add multiple cards to create meaningful expressions
5. **Speak Complete Sentences**: Use the "Speak" button for full sentence playback
6. **Clear and Restart**: Use "Clear" to remove all cards and start over

### Creating Custom PECS Cards

#### Using the Shape Creator

1. **Navigate to Create Section**: Switch to the "Shape Creator" tab
2. **Select a Shape**: Choose from circles, squares, triangles, stars, hearts, houses, cars, or trees
3. **Choose Colors**: 
   - **Shape Color**: The main color of your symbol
   - **Background Color**: The background behind your shape
4. **Add Text**: Enter a label (up to 20 characters)
5. **Adjust Text Size**: Use the slider to set appropriate text size
6. **Preview**: Watch your creation update in real-time
7. **Save to Library**: Click "Add to Library" to make it available for use

#### Uploading Custom Images

1. **Switch to Upload Tab**: Navigate to "Upload Images"
2. **Select Files**: Click "Choose Images" and select one or more image files
3. **Automatic Processing**: Images are automatically resized and added to your library
4. **Label Assignment**: File names become the spoken labels (without extensions)

### Printing and Physical Use

#### Print Options

- **Print All PECS**: Creates a 4-column grid of all available PECS cards
- **Print Current Sentence**: Generates a focused sheet with just your current sentence
- **Create PECS Book**: Organizes cards by category (Actions, Things, Feelings, Custom)

#### Print Layout Features

- **Professional Borders**: Each card has clear boundaries for cutting
- **Readable Labels**: Large, bold text under each image
- **Optimal Sizing**: Cards sized for easy handling and visibility
- **Page Breaks**: Multi-page documents properly formatted

### Advanced Features

#### Speech Customization

The application automatically optimizes speech settings, but you can understand the parameters:

- **Individual PECS**: Rate 0.8, Pitch 1.0, Volume 0.8 (clear, distinct pronunciation)
- **Complete Sentences**: Rate 0.75, Pitch 1.0, Volume 0.95 (natural conversation pace)
- **Pause Insertion**: Commas automatically added between words for natural flow

#### Visual Feedback System

- **Card Placement**: Green highlight when successfully adding cards
- **Speech Indication**: Blue highlight and pulsing animation during speech
- **Error States**: Clear visual indicators for any issues
- **Button States**: Disabled states during processing to prevent conflicts

## 🛠️ Technical Implementation

### Architecture Overview

The application is built as a single-page application (SPA) using vanilla HTML5, CSS3, and JavaScript, ensuring maximum compatibility and minimal dependencies.

```
Application Structure:
├── HTML Structure
│   ├── Header & Navigation
│   ├── Sentence Builder Area
│   ├── Picture Library Grid
│   ├── Creation Tools (Tabbed Interface)
│   └── Print Controls
├── CSS Styling
│   ├── Responsive Grid Layouts
│   ├── Touch-Friendly Interactions
│   ├── Animation & Transitions
│   └── Print Media Queries
└── JavaScript Functionality
    ├── Speech Synthesis Engine
    ├── Drag & Drop System
    ├── Canvas-Based Shape Creator
    ├── File Upload Handler
    └── Print Generation System
```

### Key Technologies

#### Speech Synthesis API
- **Browser Support**: Utilizes the Web Speech API's `speechSynthesis` interface
- **Voice Selection**: Intelligent algorithm for selecting optimal voices
- **Error Handling**: Comprehensive fallback systems for voice loading issues
- **Cross-Platform**: Works with Windows SAPI, macOS voices, and online synthesis engines

#### Canvas Graphics
- **Shape Generation**: All default icons created using HTML5 Canvas
- **Real-Time Rendering**: Dynamic shape creation with immediate preview
- **Export Capability**: Canvas-to-image conversion for library integration
- **Performance**: Optimized rendering for smooth interactions

#### Touch and Drag Systems
- **Unified Events**: Handles both mouse and touch events seamlessly
- **Visual Feedback**: Immediate response to user interactions
- **Accessibility**: Keyboard navigation support for all drag operations
- **Mobile Optimization**: Touch-first design with appropriate target sizes

### Data Management

#### Local Storage Strategy
```javascript
// PECS data structure
const pecsCard = {
    id: unique_identifier,
    label: "spoken_text",
    src: "base64_image_data",
    isCustom: boolean,
    category: "optional_category"
};
```

#### Performance Considerations
- **Memory Efficient**: Base64 encoding for images keeps everything in-memory
- **No External Dependencies**: Completely self-contained application
- **Lazy Loading**: Speech voices loaded asynchronously
- **Optimized Rendering**: Efficient DOM manipulation for large libraries

## 🎯 Use Cases and Applications

### Primary Users

#### Non-Verbal Individuals
- **Autism Spectrum**: Communication support for individuals with autism
- **Developmental Delays**: Assistive communication for various developmental conditions
- **Acquired Conditions**: Support for stroke, brain injury, or degenerative conditions
- **Temporary Needs**: Post-surgery or temporary speech difficulties

#### Caregivers and Professionals
- **Speech-Language Pathologists**: Clinical tool for therapy sessions
- **Special Education Teachers**: Classroom communication support
- **Parents and Families**: Home communication enhancement
- **Healthcare Providers**: Patient communication in medical settings

### Educational Environments

#### Classroom Integration
- **Individual Workstations**: Personal communication devices for students
- **Group Activities**: Shared vocabulary for collaborative exercises
- **Assessment Tools**: Communication evaluation and progress tracking
- **Homework Support**: Printable materials for home practice

#### Therapy Applications
- **PECS Training**: Digital implementation of traditional PECS methodology
- **Vocabulary Expansion**: Progressive introduction of new concepts
- **Sentence Structure**: Visual grammar and syntax learning
- **Generalization**: Transfer skills from digital to physical communication

### Home and Community Use

#### Daily Communication
- **Basic Needs**: Requesting food, drink, help, bathroom
- **Social Interaction**: Greetings, emotions, social phrases
- **Activity Choices**: Selecting preferred activities or items
- **Emergency Communication**: Critical needs and safety communication

#### Community Integration
- **Public Spaces**: Communication in stores, restaurants, public transport
- **Social Events**: Participation in community activities
- **Medical Appointments**: Communication with healthcare providers
- **Educational Settings**: Integration with mainstream educational environments

## 🔧 Customization and Configuration

### Creating Effective PECS Vocabularies

#### Core Vocabulary Principles
1. **Start Simple**: Begin with essential needs and wants
2. **Personal Relevance**: Include items specific to the user's life
3. **Gradual Expansion**: Add complexity as communication skills develop
4. **Visual Clarity**: Ensure images are clear and easily recognizable

#### Recommended Vocabulary Categories

**Essential Communication**
- I, you, want, need, help, stop, go, more, finished

**Basic Needs**
- drink, water, food, eat, bathroom, sleep, sit, stand

**Social Communication**
- hello, goodbye, please, thank you, yes, no, happy, sad

**Activities**
- play, work, watch, listen, walk, run, read, write

**People and Places**
- mom, dad, teacher, friend, home, school, store, park

### Visual Design Guidelines

#### Image Selection Criteria
- **High Contrast**: Clear distinction between foreground and background
- **Simple Composition**: Avoid cluttered or busy images
- **Consistent Style**: Maintain visual coherence across your library
- **Cultural Relevance**: Use images appropriate to the user's cultural context
- **Size Consideration**: Images should be recognizable at small sizes

#### Color Psychology in PECS
- **Red**: Often used for "stop" or negative concepts
- **Green**: Associated with "go" or positive actions
- **Blue**: Calming, often used for objects or neutral concepts
- **Yellow**: Attention-getting, good for important items
- **Consistent Coding**: Develop a color system and stick to it

### Advanced Customization

#### Creating Themed Vocabularies
```javascript
// Example: Mealtime vocabulary
const mealtimeTheme = {
    category: "Mealtime",
    cards: [
        { label: "hungry", shape: "circle", color: "#ff6b6b" },
        { label: "thirsty", shape: "circle", color: "#4ecdc4" },
        { label: "finished", shape: "square", color: "#45b7d1" },
        { label: "more", shape: "triangle", color: "#f9ca24" }
    ]
};
```

#### Personalization Strategies
- **User Photos**: Include pictures of familiar people and places
- **Favorite Items**: Add preferred toys, foods, or activities
- **Routine-Specific**: Create vocabularies for specific daily routines
- **Seasonal Updates**: Modify vocabulary for holidays or seasonal activities

## 🔒 Privacy and Security

### Data Protection

#### Local Data Handling
- **No Server Storage**: All data remains on the user's device
- **Browser Storage**: Uses browser's local storage for custom PECS
- **Image Processing**: All image manipulation happens locally
- **Speech Processing**: Utilizes device's built-in speech synthesis

#### Privacy Considerations
- **No Tracking**: Application doesn't collect usage data
- **Offline Capable**: Works without internet connection after initial load
- **No Account Required**: No personal information needed to use
- **Export Control**: Users maintain full control over their data

### Accessibility Compliance

#### WCAG 2.1 Guidelines
- **Level AA Compliance**: Meets accessibility standards for public use
- **Color Contrast**: All text meets minimum contrast ratios
- **Keyboard Navigation**: Full functionality without mouse/touch
- **Screen Reader Support**: Semantic HTML for assistive technologies
- **Focus Management**: Clear visual focus indicators throughout

#### Assistive Technology Support
- **Voice Control**: Compatible with voice navigation software
- **Switch Access**: Works with adaptive switches and scanning
- **Eye Tracking**: Compatible with eye-tracking communication devices
- **Head Mouse**: Supports alternative pointing devices

## 📊 Performance and Optimization

### Browser Performance

#### Memory Management
- **Efficient Storage**: Optimized image compression and storage
- **Cleanup Routines**: Automatic cleanup of unused resources
- **Memory Monitoring**: Built-in checks for memory usage
- **Performance Profiling**: Optimized for consistent frame rates

#### Loading Optimization
- **Lazy Loading**: Resources loaded only when needed
- **Caching Strategy**: Intelligent caching of frequently used items
- **Progressive Enhancement**: Core functionality works without advanced features
- **Graceful Degradation**: Fallbacks for unsupported features

### Speech Performance

#### Synthesis Optimization
- **Voice Caching**: Preferred voices remembered across sessions
- **Queue Management**: Intelligent handling of simultaneous speech requests
- **Error Recovery**: Automatic fallbacks for speech failures
- **Latency Reduction**: Optimized speech parameters for quick response

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Speech Not Working
**Problem**: No audio when clicking PECS or Speak button
**Solutions**:
1. Check browser audio permissions
2. Ensure device volume is turned up
3. Try a different browser (Chrome recommended)
4. Check if other websites can play audio
5. Restart the browser

#### Drag and Drop Issues
**Problem**: Cannot drag PECS cards to sentence builder
**Solutions**:
1. Ensure JavaScript is enabled
2. Try clicking instead of dragging on touch devices
3. Refresh the page
4. Clear browser cache
5. Try a different browser

#### Custom Images Not Loading
**Problem**: Uploaded images don't appear in library
**Solutions**:
1. Check file format (JPG, PNG, GIF supported)
2. Ensure file size is under 10MB
3. Try uploading one image at a time
4. Check browser storage permissions
5. Clear browser cache and try again

#### Print Function Not Working
**Problem**: Print button doesn't generate printable pages
**Solutions**:
1. Allow pop-ups in browser settings
2. Check printer connectivity
3. Try "Print All PECS" instead of other options
4. Use browser's print preview
5. Try a different browser

### Browser-Specific Issues

#### Chrome/Chromium
- **Best Performance**: Recommended browser for all features
- **Speech Quality**: Highest quality speech synthesis
- **Known Issues**: None reported

#### Firefox
- **Good Compatibility**: All features supported
- **Speech Limitations**: Fewer voice options available
- **Workaround**: Most features work identically to Chrome

#### Safari (macOS/iOS)
- **iOS Compatibility**: Full touch support
- **Voice Quality**: Excellent built-in voices
- **Known Issues**: Some advanced speech features may be limited

#### Edge
- **Windows Integration**: Good integration with Windows voices
- **Performance**: Comparable to Chrome
- **Known Issues**: None reported

## 🔮 Future Development

### Planned Features

#### Version 2.0 Roadmap
- [ ] **Cloud Synchronization**: Optional account-based sync across devices
- [ ] **Collaborative Vocabularies**: Share PECS libraries between users
- [ ] **Usage Analytics**: Track communication patterns for improvement
- [ ] **Advanced Categories**: Sophisticated organization and filtering
- [ ] **Multi-Language Support**: International language options
- [ ] **Offline PWA**: Progressive Web App for offline installation

#### Version 3.0 Vision
- [ ] **AI-Powered Suggestions**: Intelligent vocabulary recommendations
- [ ] **Natural Language Processing**: Context-aware sentence completion
- [ ] **Video PECS**: Support for animated and video-based communication
- [ ] **Biometric Integration**: Voice recognition for personalization
- [ ] **Therapeutic Insights**: Progress tracking and reporting tools
- [ ] **API Integration**: Connect with other assistive technologies

### Community Contributions

#### How to Contribute
1. **Fork the Repository**: Create your own copy for development
2. **Create Feature Branches**: Develop new features in isolation
3. **Follow Coding Standards**: Maintain consistent code style
4. **Test Thoroughly**: Ensure accessibility and cross-browser compatibility
5. **Submit Pull Requests**: Contribute back to the main project

#### Areas for Contribution
- **Accessibility Improvements**: Enhanced screen reader support
- **Performance Optimization**: Faster loading and smoother interactions
- **Visual Design**: Improved aesthetics and user experience
- **Documentation**: Better user guides and technical documentation
- **Testing**: Comprehensive test suites and quality assurance
- **Internationalization**: Support for additional languages and cultures

### Research and Development

#### Academic Collaboration
- **University Partnerships**: Collaborate with special education research
- **Clinical Studies**: Evidence-based effectiveness research
- **User Experience Research**: Continuous improvement based on real-world use
- **Accessibility Research**: Advancing digital accessibility standards

#### Technology Integration
- **Emerging Standards**: Support for new web technologies
- **Hardware Integration**: Connect with specialized communication devices
- **IoT Connectivity**: Integration with smart home and environmental controls
- **Machine Learning**: Predictive text and personalized recommendations

## 📞 Support and Community

### Getting Help

#### Documentation Resources
- **User Manual**: Comprehensive guide in `/docs/user-manual.md`
- **Video Tutorials**: Step-by-step video guides (coming soon)
- **FAQ**: Frequently asked questions and solutions
- **Best Practices**: Guidelines for effective PECS implementation

#### Community Support
- **GitHub Issues**: Report bugs and request features
- **Discussion Forums**: Community Q&A and sharing
- **Professional Networks**: Connect with SLPs and educators
- **User Groups**: Local and online user communities

#### Professional Support
- **Training Materials**: Resources for educators and therapists
- **Implementation Guides**: Best practices for different environments
- **Consultation Services**: Professional guidance for large deployments
- **Custom Development**: Specialized features for specific needs

### Contributing to the Community

#### Sharing Your Experience
- **Case Studies**: Share successful implementation stories
- **Vocabulary Sets**: Contribute specialized PECS libraries
- **Best Practices**: Document effective usage strategies
- **Feedback**: Help improve the application through testing

#### Professional Development
- **Conference Presentations**: Share your experience at professional events
- **Research Collaboration**: Participate in effectiveness studies
- **Training Delivery**: Help train other professionals
- **Advocacy**: Promote accessible communication technology

## 📄 License and Legal

### Open Source License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 PECS Communication Builder Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Disclaimer

This application is designed as an assistive communication tool and should be used as part of a comprehensive communication plan developed with qualified professionals. It is not a replacement for professional speech-language therapy or medical treatment.

### Acknowledgments

- **PECS Methodology**: Inspired by the Picture Exchange Communication System developed by Lori Frost and Andy Bondy
- **Accessibility Standards**: Built following WCAG 2.1 guidelines
- **Open Source Community**: Thanks to all contributors and users who help improve this tool
- **Special Education Professionals**: Guidance and feedback from SLPs, educators, and therapists worldwide

**Made with ❤️ for the accessibility community**

*Empowering communication, one picture at a time.*
