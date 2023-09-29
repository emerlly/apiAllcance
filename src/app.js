const express =  require('express');
const userRouter = require('./router/userRouter');

const app = express();
const port = 3500;

app.use('/api', userRouter);

app.get('/', (req, res) =>{
    res.send({
        nome: 'Emerlly',
        Tel: '99 9999-9999'
    });

} );




app.listen(port, () => {
    console.log('Server On');
});
