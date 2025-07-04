// server.js - Simple Node.js server for PECS Communication Builder
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json({ limit: '50mb' }));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: API endpoint to save user data (if you want persistence)
app.post('/api/save-data', (req, res) => {
    try {
        const userData = req.body;
        const dataPath = path.join(__dirname, 'data', 'user-data.json');
        
        // Create data directory if it doesn't exist
        if (!fs.existsSync(path.join(__dirname, 'data'))) {
            fs.mkdirSync(path.join(__dirname, 'data'));
        }
        
        fs.writeFileSync(dataPath, JSON.stringify(userData, null, 2));
        res.json({ success: true, message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Optional: API endpoint to load user data
app.get('/api/load-data', (req, res) => {
    try {
        const dataPath = path.join(__dirname, 'data', 'user-data.json');
        
        if (fs.existsSync(dataPath)) {
            const userData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
            res.json({ success: true, data: userData });
        } else {
            res.json({ success: true, data: null });
        }
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎉 PECS Communication Builder server is running!`);
    console.log(`📱 Open your browser and go to: http://localhost:${PORT}`);
    console.log(`🌐 Or access from other devices on your network: http://YOUR_IP_ADDRESS:${PORT}`);
    console.log(`🛑 Press Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down PECS Communication Builder server...');
    process.exit(0);
});