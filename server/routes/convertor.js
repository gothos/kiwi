const cors = require('cors')
const conversions =  require('../const/conversions')


const words = (a, b) => b.reduce((arr, b) => arr.concat(a.map(a => a + b)), []);



module.exports = function(app) {
    app.get('/convert', cors(), (req, res) => {
        try {
            const value = req.query.value;
            const digits = value.split('');
            const arraysToCombine = [];
            digits.forEach(digit => {
                arraysToCombine.push(conversions[digit]);
            });
            const convertion = arraysToCombine.reduce(words).sort();
            res.send(convertion);
        } catch(e) {
            res.end('Some error during convertion');
        }
    })
};