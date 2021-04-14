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
    goes: 'vroom',
}

const arrOfObj = Object.keys(someObject);
['wheels', 'type', 'goes']

for (let item of arrOfObj) {
    console.log(someObject[item]) // first time it's wheels === someObject.wheels
    someObject.wheels = 3;
}
*/

export function makeMoreScreamingKeys(someObject) {
    const obj = {};
    Object.keys(someObject).forEach(key => {
        someObject.key = ""
        key.toUpperCase();
      });

      return obj;
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
