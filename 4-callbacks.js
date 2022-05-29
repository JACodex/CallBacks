// const request = require('postman-request')
// require('dotenv').config()

// setTimeout(()=>{
//     console.log("two seconds are up")
// }, 2000);


// // function mathFunction(){
// //     console.log( Math.floor(Math.random() * 10))
// // }
// // setTimeout(mathFunction, 3000);

// // const names = [ "josh", "sora", "donald", "goofey"];

// // const shortNames = names.filter((shortName)=>{
// //     return shortName.length <= 4
// // });

// // console.log(shortNames);



// // request({url: process.env.MAPBOX_URL, json: true}, (err, response, body)=>{
// //     let latLongConstructor = []
// //     if(err){
// //          console.log('Error Occured::' + err)
// //     }else if(response.body.error){
// //         console.log("Error: " + response.body.error)
// //     }else{
// //         let latLong = []
// //         response.body.features[0].center.map((elem )=>{
// //             latLong.push(elem)
// //             console.log(elem)
// //         })
// //         reverseLat = latLong.reverse()
// //         newURL = process.env.URL + reverseLat.toString() + "&units=f"

// //         request({ url: newURL, json: true}, (err, response, body)=>{ 
// //             if(err){
// //                 console.log('error: ' + err)
// //                 return
// //             }
// //             console.log('In '+ response.body.location.name + ', ' + response.body.location.country +
// //                 ' it is currently ', + response.body.current.temperature + ' degrees, Feels like '+
// //                 response.body.current.feelslike + ' weather description: ' + response.body.current.weather_descriptions[0])
// //         })
// //     }
// // })

// const geocode = (address , callback) =>{  /** use callback to return a value out of a nested function because Async funcs dont return before main() on the call stack */
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             lognitude: 0
//         }
//         callback(data);
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(()=>{
        sum = num1 + num2;
        callback(sum); 
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})