//it provide an alternative syntax to the traditional strings by using backticks. Benefit is that it enables us to use string interpolation meaning that with the dolar sign and curly braces we can use that as a placeholder and and specify the expressions in tit rather than having to using the concatenation with the plus operator.


let firstName = 'Steven';
let lastName = 'Smith';
let fullName = firstName + lastName;//StevenSmith
let fullname = firstName+ ' ' + lastName;//Steven Smith
let Fullname = `${firstName} ${lastName}`;//Steven Smith
console.log(fullName);
console.log(fullname);
console.log(Fullname);