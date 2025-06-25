db.employees.insertMany([
    {
        name:"johnSmith",
        email:"abce@gmail.com",
        deperatment:"IT",
        salry:"60000",
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"IT",
        salary:"100000",
        location:["AZ","TX"],
        date:Date()
    }])

    // db.employees.find.skip(1) use to skip the first document
    // db.employees.find.limit(1) used to find the only one document(row) bcz limit(1)
    // db.employees.find.skip(1).limit(1) it is used to find skip the first document then it will display the second document bcz limit
    // db.employees.find().sort({name:1}) srting in Ascending order
    // db.employees.find().sort({name:-1}) sorting in decending order
    // db.employees.find().sort({name:-1}),limit(1) it will dispaly the last document(row)
    //  db.employes.find.find({depertment:"IT"}) it will be find the all IT department 
    // db.employees.find({},{_id:0,name:1}) this will be display the names of the documents 
    //db.employees.find({},{_id:false,name:true})
    //db.employees.find({location:"FL"})
    