const express = require('express');
const fs = require('fs-extra');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:8081', // Replace with your Vue.js app's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));


app.get('/api/copy-folder', async (req, res) => {
  const sourceFolder = req.query.sourceFolder;
  const destinationFolder = req.query.destinationFolder;

  if (!sourceFolder || !destinationFolder) {
    res.status(400).json({ error: 'Source and destination folder paths are required.' });
    return;
  }

  try {
    await fs.copy(sourceFolder, destinationFolder);
    res.json({ message: 'Folder copied successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while copying the folder.' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
