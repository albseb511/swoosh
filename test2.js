
// function calculate_ranks([{“Iron Man” : 10, “Spider Man”: 10, “Captain Marvel”: 15, “Thor”: 13,
//    “Hulk”: 10, “Hawkeye”: 8}])

arg1 = [{name:'Iron Man',marks:10},{name:'Spider Man',marks:10},{name:'Captain Marvel',marks:15},
{name:'Thor',marks:13},{name:'Hulk',marks:10},{name:'Hawkeye',marks:8}]
arg2 = []
//console.log(arg1)        
console.log(arg1.length)

function calculate_ranks(argument) {
    if(!argument)
    return 'object empty'
    argument.sort((a,b)=>(a.marks<b.marks?1:-1))
    console.log(argument)
    marks = argument.map(a=>a.marks)
    console.log(marks)
    argument[0].marks = 1;
    for(let i=1 ;i<argument.length;i++){
        if(argument[i].marks === marks[i-1])
        argument[i].marks = argument[i-1].marks
        else
        argument[i].marks=i+1
    }


    //console.log(argument)
    return argument
}

console.log(calculate_ranks(arg2))