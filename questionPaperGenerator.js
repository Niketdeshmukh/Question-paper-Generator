// questionPaperGenerator.js
const _ = require('lodash');
const questions = require('./questionStore');

function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];

  Object.keys(difficultyDistribution).forEach(difficulty => {
    const difficultyQuestions = _.filter(questions, { difficulty });
    const questionCount = Math.ceil((difficultyDistribution[difficulty] / 100) * totalMarks / (difficultyQuestions.length || 1));

    questionPaper.push(..._.sampleSize(difficultyQuestions, questionCount));
  });

  return questionPaper;
}

const totalMarks = 100;
const difficultyDistribution = {
  Easy: 20,
  Medium: 50,
  Hard: 30,
};

const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);

console.log('Generated Question Paper:');
questionPaper.forEach(question => {
  console.log(`${question.subject} - ${question.topic} (${question.difficulty}): ${question.question} [${question.marks} marks]`);
});
