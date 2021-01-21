 let db = require('./models')


// db.user.update(
//     {firstName: 'kanny'  },
//     {where: { id : 3 }
//   })
//   .then(updatedRecord=>{
//     console.log(updatedRecord);
//   })



// db.user.destroy ({where: {id:2}})
// .then(numRowsDeleted =>{
//     if(numRowsDeleted === 1){
//         console.log('Deleted successfully');
//       }
//     }, function(err){
//        console.log(err); 

// })
// db.user.findAll({where: {lastName: 'Meyer'}})
//   .then((results) => {
//     results.forEach(function(index){
//             console.log(index.id, index.firstName);
//         })
//   });

// db.user.findAll()
// .then(records=>{
//     records.forEach(record => {
//         console.log(record.id,record.firstName);
        
//     });
    
// })

// db.user.create({
//     firstName: 'Adam',
//     lastName: 'Meyer',
//     email: 'andrea@dc.com'
// });
// db.user.create({
//     firstName: 'Cedal',
//     lastName: 'Meyer',
//     email: 'andrea@dc.com'
// });
