const app = require('./app');

app.listen(process.env.PORT || 3333, () => {
    console.log(`app is running on port ${process.env.PORT}`);
});