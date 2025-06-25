// db.employees.find({department:{$eq:"IT"}})
// db.employees.find({salary:{$lt:80000}})
// db.employees.find({salary:{$lte:80000}})
// db.employees.find({salary:{$gt:80000}})
// db.employees.find({salary:{$gte:80000}})
// db.employees.find({salary:{$ne:80000}})
db.employees.find({salary:{$lte:80000}})
db.employees.find({salary:{$gt:3000},department:{$eq:"IT"}},
    {name:1}
);
db.users.find({},{_id:0,name:1})
db.users.find({name:{$eq:"Shyam"}},{_id:0,email:1})
db.users.find({points:{$gt:3}},{_id:0,email:1})
db.users.find({points:{$gt:3}},{_id:0,name:1})
db.users.find({points:{$gt:3}},{_id:0,name:1})

db.employees.find()


