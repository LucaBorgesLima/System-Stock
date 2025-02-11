import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {    
    res.send('test server ts');
});


export default app; 