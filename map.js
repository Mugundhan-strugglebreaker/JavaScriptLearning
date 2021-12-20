let map = new Map()

map.set('mugi','java')
map.set('mei','python')
map.set('viki','CA')

// Using for loop
for(let [k,v] of map){
    console.log(k +":"+v)
}
//Using for each loop
map.forEach((k,v)=>{
    console.log(k+" : "+v)
})