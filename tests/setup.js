jest.setTimeout(70000);

require('../models/User');
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useMongoClient: true});


//We create this because jest does not globally require files that are not test files.
//So we need to require it specially for our test

// In the last section we spoke about how code is not automatically shared between all of our test files

// inside the test directory and anything else in sight inside of our actual project.