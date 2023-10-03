const express =  require('express');
const userRouter = require('./router/userRouter');
const bodyParse = require('body-parser');
const cors = require('cors');
const authRouter =  require('./router/authRouter');

const app = express();
const port = 3500;

app.use(bodyParse.json());

app.use('/api', authRouter);
app.use('/api', userRouter);

//app.use(cors);


app.get('/', (req, res) =>{
    res.send({
        nome: 'Emerlly',
        Tel: '99 9999-9999'
    });

} );


app.listen(port, () => {
    console.log('Server On');
});
