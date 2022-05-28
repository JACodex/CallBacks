const request = require('postman-request')
require('dotenv').config()

setTimeout(()=>{
    console.log("two seconds are up")
}, 2000);


function mathFunction(){
    console.log( Math.floor(Math.random() * 10))
}
setTimeout(mathFunction, 3000);

const names = [ "josh", "sora", "donald", "goofey"];

const shortNames = names.filter((shortName)=>{
    return shortName.length <= 4
});

console.log(shortNames);

request({url: process.env.MAPBOX_URL, json: true}, (err, response, body)=>{
    let latLongConstructor = []
    if(err){
         console.log('Error Occured::' + err)
    }else if(response.body.error){
        console.log("Error: " + response.body.error)
    }else{
        let latLong = []
        response.body.features[0].center.map((elem )=>{
            latLong.push(elem)
            console.log(elem)
        })
        reverseLat = latLong.reverse()
        newURL = process.env.URL + reverseLat.toString() + "&units=f"

        request({ url: newURL, json: true}, (err, response, body)=>{ 
            if(err){
                console.log('error: ' + err)
                return
            }
            console.log('In '+ response.body.location.name + ', ' + response.body.location.country +
                ' it is currently ', + response.body.current.temperature + ' degrees, Feels like '+
                response.body.current.feelslike + ' weather description: ' + response.body.current.weather_descriptions[0])
        })
    }
})