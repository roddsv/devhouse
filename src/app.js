import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import path from 'path';

class App {
    constructor() {
        this.server = express();

        mongoose.connect(
            'mongodb+srv://adsrodsoares:gbmax1234@devhouse.ddj6e.mongodb.net/devhouse?retryWrites=true&w=majority&appName=devhouse', 
        );

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;