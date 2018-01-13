const fs        = require('fs');
const path      = require('path');
const process   = require('process');

function StepLoader() {}

StepLoader.prototype.load = function() {

    let stepsDir = path.join(__dirname, '../steps');
    let steps = [];

        fs.readdir(stepsDir, function(err, files) {

        if (err) {
            console.error('Could not find directory.', err);
            process.exit(1);
        }

        files.forEach(function(file) {
            let step = path.join(stepsDir, file);
            steps.push(step);
        });

    });

    return steps;
};

module.exports = new StepLoader();