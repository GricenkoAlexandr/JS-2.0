const express=require('express'),
morgan=require('morgan'),
path=require('path');

const app=express(),
port=3000;

app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'ejs')


app.use(morgan('dev'))

app.use('/', require('./routes'))
app.use('/about', require('./routes/about.js'))


app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server start at port ${port} lets do something crazy!!!`);
});