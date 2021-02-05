const db = require('./models')

// db.user.create({
//     firstName: 'Gold',
//     lastName: 'Seyi',
//     age: 33
// }).then((data)=>{
//     console.log(data)
// })


// db.user.create({
//         firstName: 'Brian',
//         lastName: 'Krabec',
//         age: 27
//     }).then((data)=>{
//         console.log(data)
//     })

// db.user.create({
//         firstName: 'Nick',
//         lastName: 'Schmitt',
//         age: 28
//     }).then((data)=>{
//         console.log(data)
//     })


//to find one user
// db.user.findOne({
//          where: {firstName: 'Nick'}
//         }).then(function(user){
//             console.log(user)
//          //console.log(user.get())
//         })
//         //to catch error
//         .catch(err=> {
//             console.log(err)
//         })


    
// //to get all users
//         db.user.findAll()
//         .then((users)=>{
// //print each name
// users.forEach(user => {
//     console.log(user.firstName + ' ' + user.lastName)
// })
//         })