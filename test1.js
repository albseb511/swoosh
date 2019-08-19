var name1 = 'MASAI'
var name2 = 'MAASSI SCHOOL'
var name3 = 'MA SAI'
var name4 = 'MSSAI SCHOOL'  


function anagram_check(text1, text2) {
    // return1 else ignore
    text1.length!=text2.length?-1:1
    //HOF for splitting, sorting by alphabel and checking if condtion is true
    // return 1 else -1
    text1.split('').sort().join('')===text2.split('').sort().join('')?1:-1
};

//If statement to call function, change the two args for calling the function ie. name1, name3
(aCheck = anagram_check(name1,name3))===-1?console.log('False'):console.log('True')

