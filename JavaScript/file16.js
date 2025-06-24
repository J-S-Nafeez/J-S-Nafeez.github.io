//promisess
// const f1=()=>
// {
//     return 5;
// }
// const f2=(x)=>
// {
//     console.log(x+6)
// }
// const n=f1();
// f2(n);


// const f1=(()=>
// {
//     return new Promise((resolve,reject)=>
//     {
//     setTimeout(()=>
//     {
//     resolve(5);
//     },2000);
//     });

// });
// f1()
// .then((a)=>
// {
//     console.log("done");
//     f1(a)
// });
// const f2=((x)=>
// {
//     console.log(x+10);
// })
// const n=f1();
// const sum=f2(n)




// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve(5);
//     reject("Something went Wrong...!")
//     }, 2000);
//   });
// };

// const f2 = (x) => {
//   console.log(x + 10);
// };

// f1()
//   .then((a) => {
//     console.log("done");
//     f2(a); // This will print 15
//   })
//   .catch(error=>
//   {
//     console.log("error occured");
//   });


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>
// {
//     return res.json();
// })
// .then((data)=>
// {
//     // console.log(data.title+ "called");
//     data.forEach((value)=>
//     {
//         console.log(value.name);
//         console.log(value.email);
//     })
// })
// .catch((error)=>
// {
//     console.log("Error in Apis..")
// })





async function fetchData()
{
    const data= await fetch("https://jsonplaceholder.typicode.com/users")
    const data1= await data.json();
    data1.forEach((value=>
    {
        console.log(value.name);
    }
    ))
}
fetchData();