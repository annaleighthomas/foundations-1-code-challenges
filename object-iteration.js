// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/
/*

const someObject = {
    wheels: 8,
    type: 'truck',
    goes: 'vroom'
}

const arrOfObj = Object.keys(someObject);
arrOfObj.forEach(item)
['wheels', 'type', 'goes']

for (let item of arrOfObj) {
    someObject.wheels
    someObject['wheels']
    someObject[item] if item === 'wheels'
    someObject[item.toUpperCase()]
    console.log(someObject[item]) // first time it's wheels === someObject.wheels
    someObject.wheels = 3;
}
arrOfObj.forEach(item => {

})
*/

export function makeMoreScreamingKeys(someObject) {
    const screamingKeys = {}
    Object.keys(someObject).forEach(keys => {
        screamingKeys[keys.toUpperCase()] = someObject[keys]
    })
    return screamingKeys;
}

    
  
/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return '';
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}
