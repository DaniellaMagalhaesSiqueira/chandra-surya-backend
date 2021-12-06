import express from 'express';
import cors from 'cors';
import routes from './src/routes/index';
import bodyParser from 'body-parser';
import { connection } from './src/database/config';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);


app.listen(port, async () => {

    await connection;
    
    console.log('Conexão com o banco feita com sucesso!');
    console.log(`Aplicação online na porta: ${port}`);
});