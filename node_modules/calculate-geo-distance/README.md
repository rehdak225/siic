```javascript
const calculate = require('calculate-geo-distance');

// coördinates of Amsterdam
const ams = {
    'lat': 50.9394805,
    'long': 5.9247853,
}

// coördinates of Rotterdam
const rot {
    'lat': 51.926789,
    'long': 4.421901,
}

const distanceInKm = calculate(ams.lat, ams.long, rot.lat, rot.long)

console.log(distanceInKm)
// 151.34273341268528
```
