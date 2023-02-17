const chalk= require('chalk')
const fs= require('fs')
const getnotes= ()=> {
    return "Got notes"
}

//Add notes
const addNotes= (title, body)=>{
   const notes=loadNotes()
   //const duplicatedNotes= notes.filter((note)=> note.title=== title)
   const duplicatedNote= notes.find((note)=> note.title=== title)

   debugger//node inspect apps.js Add --title="wo" --body="ye", then go for chrome://inspect

   if(!duplicatedNote){
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
const saveData=(notes)=> {
    const string_convert2=JSON.stringify(notes)
    fs.writeFileSync('notes.json',string_convert2)
}
const loadNotes= ()=> {
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
const removeNotes=(title)=>{
  const notes= loadNotes()
  const notesMatch= notes.filter((note)=> note.title=== title)
  if(notesMatch.length===0){
    console.log(chalk.red.inverse("No note found!"))
  }else{
    notes.pop({title:title})
    saveData(notes)
    console.log(chalk.green.inverse("Notes removed"))
  }
}
//List notes
const listNotes=()=>{
  const notes=loadNotes()
  console.log(chalk.bold("Your notes"))  
  notes.forEach((note) => {
    console.log(note.title)   
  });
}
const readNotes=(title)=>{
  const notes=loadNotes()
  const read=notes.find((note)=>title===note.title)
  if(read){
    console.log('Notes read\n'+read.body)
  }else{
    console.log("Could'nt find notes")
  }
}
module.exports={
    getnotes:getnotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}