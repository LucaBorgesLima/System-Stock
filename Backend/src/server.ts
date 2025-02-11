import app from './app';
import dotenv from 'dotenv';
import { sequelize } from './database/models/index';


dotenv.config();

const PORT = process.env.PORT || 3001;

const StartServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection sequelize success.');

        app.listen(PORT, () => {
            console.log(`Server is run on PORT ${PORT}`);
        });
        
    } catch (error) {
        
    }
};

StartServer();
 