const gravel = {
    bar : 'either',
    wheel : '29',
    gears : '21',
}

const mtb = {
    bar : 'flat',
    wheel : '26',
    gears : '21',
}

const road = {
    bar : 'drop',
    wheel : '29',
    gears : '14',
}

let bikeArr = [gravel, mtb, road];

for (let b of bikeArr) {
    console.log(b);
}

for (let b of bikeArr) {
    console.log(Object.keys(b));
}

for (let b of bikeArr) {
    console.log(Object.values(b));
}

for (let b of bikeArr) {
    console.log(Object.entries(b));
}


