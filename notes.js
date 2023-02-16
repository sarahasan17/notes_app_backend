
const chalk= require('chalk')
const fs= require('fs')
const getnotes=function(){
    return "Got notes"
}
//Add notes
const addNotes=function(title, body){
   const notes=loadNotes()
   const duplicatedNotes= notes.filter(function(note){
    return note.title=== title
   })
   if(duplicatedNotes.length===0){
    notes.push({
        title:title,
        body:body
       })
       saveData(notes)
       console.log('new Note added')
   }
   else{
    console.log('Note taken')
   }
   
}
const saveData=function(notes){
    const string_convert2=JSON.stringify(notes)
    fs.writeFileSync('notes.json',string_convert2)
}
const loadNotes= function() {
     try{
        const bufferread=fs.readFileSync('notes.json')
        const convert=bufferread.toString()
        return JSON.parse(convert)
     }
     catch (e){
           return [];
     }
}
//Remove Notes
const removeNotes= function(title){
  const notes= loadNotes();
  const notesMatch= notes.filter(function(note){
    return note.title=== title
  })
  if(notesMatch.length===0){
    console.log(chalk.red.inverse("No note found!"))
  }else{
    notes.pop({title:title})
    saveData(notes)
    console.log(chalk.green.inverse("Notes removed"))
  }
}
module.exports={
    getnotes:getnotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}