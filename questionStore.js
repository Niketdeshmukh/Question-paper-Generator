const fs = require('fs');
const path = require('path');

const questionFilePath= path.join(__dirname, 'questions.json');
const questionData = fs.readFileSync(questionFilePath,'utf-8');
const questions = JSON.parse(questionData);

module.exports = questions;