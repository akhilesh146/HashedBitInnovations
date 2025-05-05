// q1
let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const filteredStates = states.filter(s => !"AEIOU".includes(s[0]));

console.log(filteredStates);

console.log('----------------------------------');

//q2
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);

console.log('----------------------------------');
//q3
let string = "INDIA"; 
let arr = string.split(""); 
arr.splice(3, 0, 'O', 'N', 'E', 'S'); 

let newString = arr.join(""); 
console.log(newString);
console.log('----------------------------------');

//q4
function countVowelsAndConsonants(str) {
    let vowels = "AEIOUaeiou";
    let vowel = 0, consonant = 0;

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            vowels.includes(char) ? vowel++ : consonant++;
        }
    }

    return vowel + " vowels and " + consonant + " consonants";
}

let text = "I am exited to work with the HahsedBit Innovations team";
console.log(countVowelsAndConsonants(text));

console.log('----------------------------------');

//q5
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log(correctfn("I am starting to work with HashedBit Innovattttions", "Innovattttions", "Innovations"));

console.log('----------------------------------');

//q6
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const result = inputArr.filter(num => num > 5);

console.log(result);

console.log('----------------------------------');

//q7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
const res = students.map(student => {
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average };
});

console.log(res);

console.log('----------------------------------');

//q8

function getSingleDigit(num) {
    while (num >= 10) {
      num = num.toString().split('').reduce((s, digit) => s + +digit, 0);
    }
    return num;
}
  
console.log(getSingleDigit(456));

console.log('----------------------------------');

//q9
function wordCount(paragraph) {
    return paragraph.split(" ").filter(word => word.length > 0).length;
}
  
let para = "Strarting to work with the HashedBit Innovations.";
console.log(wordCount(para)); 
  
console.log('----------------------------------');

//q10
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); 

console.log('----------------------------------');

//q11
const stud = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const studentAverages = Object.fromEntries(
    Object.entries(stud).map(([student, subjects]) => {
        const scores = Object.values(subjects);
        const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
        return [student, { average }];
    })
);

console.log(studentAverages);


