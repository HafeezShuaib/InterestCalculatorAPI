const express = require('express');
const morgan = require('morgan');
const { simpleInterest, compoundInterest } = require('./calculator.js');
const { validateSimple, validateCompound } = require('./validator.js');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.post('/api/calculate/simple-interest', (req, res) => {
    try {
        const {principal, rate, time} = req.body;

        //Input Validation
        errors = validateSimple(principal, rate, time);
        if  (errors) {
            return res.status(400).json({error: errors});
        }

        //Interest Computation
        const {interest, amount} = simpleInterest(principal, rate, time);

        return res.status(200).json({ interest, amount });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internal server error'});
    }
});

app.post('/api/calculate/compound-interest', (req, res) => {
    try{
        const {principal, rate, time, frequency} = req.body;

        //Input Validation
        errors = validateCompound(principal, rate, time, frequency);
        if  (errors)    {
            return res.status(400).json({error: errors});
        }
        
        //Interest computations
        const {interest, amount} = compoundInterest(principal, rate, time, frequency);

        return res.status(200).json({ interest, amount });
    } catch {
        console.log(error);
        return res.status(500).json({error: 'Internal server error'});
    }
});