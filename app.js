const express = require('express')
const cors = require('cors')
const app = express()
const xlsx=require('xlsx');
const _PORT= process.env._PORT||3000
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/services',(req,res)=>{
    let wb=xlsx.readFile('data.xlsx');
    let ws=wb.Sheets['services'];
    let data =xlsx.utils.sheet_to_json(ws);
//  let data=[
// {title:'1',description:'desc1',icon:'briefcase'},
//  {title:'2',description:'desc2',icon:'envelope'},
//  {title:'3',description:'desc3',icon:'gear'},
//  {title:'4',description:'desc4',icon:'map'},
//  {title:'5',description:'desc5',icon:'cloud'},
//  {title:'6',description:'desc6',icon:'twitter'}
// ]  
 res.send(data); 
})
app.listen(_PORT)