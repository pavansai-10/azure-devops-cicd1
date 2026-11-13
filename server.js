
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const webRoot = path.join(__dirname, 'web');

// Serve static HTML, CSS and JavaScript files
app.use(express.static(webRoot));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        app: 'azure-devops-dashboard'
    });
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(webRoot, 'index.html'));
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Azure DevOps Dashboard running at http://localhost:${port}`);
});
