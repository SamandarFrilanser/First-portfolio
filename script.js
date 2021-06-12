let quastions = [
    'What is your name?',
    'How old are you?',
    'what is your phone number?',
    'Where do you live?',
    'What is your telegram nick name?'
]
let answers=[];
for(let i = 0;i<=quastions.length;i++)
{
    answers[i] = prompt(quastions[i]);
}
console.log(answers);