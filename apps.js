const notes=require('./notes.js')
const validator= require('validator')
const chalk= require('chalk')
const yargs=require('yargs')
const { demandOption } = require('yargs')
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
//to add data
yargs.command({
   command:'Add',
   describe:'Adds a new value',
   builder:{
    title: {
        describe:"Add titles",
        demandOption: true,
        type:'string'

    },
    body:{
        describe:"Add body",
        demandOption:true,
        type:'string'
    }
},
   handler:(argv)=>notes.addNotes(argv.title,argv.body)
})
//to remove data
yargs.command({
    command:"remove",
    describe:"to remove a value",
    builder:{
        title: {
            describe:"remove titles",
            demandOption: true,
            type:'string'
        },

    },
    handler:(argv)=> notes.removeNotes(argv.title)

})
//to list data
yargs.command({
    command:"list",
    describe:"to list a value",
    handler:()=>notes.listNotes()
})
//to read data
yargs.command({
    command:"read",
    describe:"to read a value",
    builder: {
      title:{
        describe:'Read the data',
        demandOption:true,
        type:'string'
      }
    },
    handler:(argv)=>notes.readNotes(argv.title)
}) 
//console.log(yargs.argv)
yargs.parse()

