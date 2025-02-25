import express from 'express';
import router from './router/routers';

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {    
    res.send('test server ts');
});


export default app; 