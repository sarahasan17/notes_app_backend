const getnotes=require('./notes.js')
const validator= require('validator')
const chalk= require('chalk')
const yargs=require('yargs')
//const notepad=getnotes("Alhamdulillah")
//const color=chalk.bold.blue
//console.log(notepad)

//console.log(validator.isURL("sarahasan.com"))
//console.log(color.inverse("Alhamdulillah"))
/*console.log(process.argv)
const val=process.argv[2]
if(val==='Alhamdulillah'){
    console.log('Good going')
}else{
    console.log('Be grateful')
}
*/
//Customize yargs version
yargs.version('1.0.0')
//Add command
yargs.command({
   command:'Add',
   describe:'Adds a new value',
   handler:function(){
    console.log('Adding a new value')
   }
})
yargs.command({
    command:"remove",
    describe:"to remove a value",
    handler:function(){
        console.log('Removing a new value')
    }
})
//to list a command
yargs.command({
    command:"list",
    describe:"to list a value",
    handler:function(){
        console.log('Listing a new value')
    }
})
//to read a command
yargs.command({
    command:"read",
    describe:"to read a value",
    handler:function(){
        console.log('reading a new value')
    }
})
console.log(yargs.argv)

