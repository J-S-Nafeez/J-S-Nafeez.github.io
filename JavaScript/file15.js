// const students=
// {
//     "name":"apple",
//     "class":1,
// }
// const data=JSON.stringify(students);
// console.log(data);


const students=
{
    name:"apple",
    class:1,
}
const data=JSON.stringify(students);
console.log(data);

const newStu=JSON.parse(data);
console.log(newStu);
