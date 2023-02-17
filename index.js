import express from 'express';
import bodyPharser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyPharser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send("Hello this is home page."));


app.listen(PORT, () => console.log(`Server is running on port: http://localhost ${PORT}`));