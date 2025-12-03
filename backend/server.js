import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', async(req, res) => {
    try {
        const query = req.query.movie || 'pulp fiction';
        const type = 'movie';
        
        
        const apiData = await axios.get('https://tastedive.com/api/similar', {
            params: {
                q: query,
                type: type,
                k: process.env.TASTEDIVE_API_KEY, 
                info: 1, 
                limit: 20
            }
        });
        

        const firstMovie = apiData.data.similar.results[1];
        
        res.json({
            recommendations: firstMovie
        });
    } catch (error) {
        console.error('Full Error:', error);
        
        
        res.status(500).json({ 
            error: 'Failed to fetch recommendations',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});