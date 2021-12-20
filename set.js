// Set has only takes unique value and with any order not neseccarily with user inserted order
let x = new Set('mugundhan');
console.log(x)

let y = new Set();
y.add(1)
y.add(4)
y.add(1)
y.add('mugi')
y.add('mei')
y.add('viki')

//iteration for set

y.forEach((value)=>{
    console.log(value);
})

//check whether the value is present or not
console.log(y.has('mugi'))