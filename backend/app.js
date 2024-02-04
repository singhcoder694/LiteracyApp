const express = require('express');
const supabase = require('./supabaseClient');
const app = express();
require('dotenv').config();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/login', async (req,res) => {
    console.log(req.body);
    const { name , rollNo } = req.body;

    const {data, error} = await supabase
    .from('User')
    .select('rollNo')
    .eq('rollNo', rollNo)

    if(error) {
        console.log(error);
       return res.status(500).json({error: 'Internal Server Error'})
    }
    if(data.length === 0) {
       return res.status(404).json({error: 'User not found'})
    }
    else {
       return res.status(200).json({message: 'User found'})
    }

})

app.post('/register', async (req,res) => {
    console.log(req.body);
    const { name } = req.body;

    const {data, error} = await supabase
    .from('User')
    .insert([{name: name}])
    .select('rollNo')

    if(error) {
        console.log(error);
       return res.status(500).json({error: 'Internal Server Error'})
    }
    else {
       return res.status(200).json({message: 'User registered', rollNo: data[0].rollNo})
    }
})

app.post('/avatar', async(req, res) => {
    console.log(req.body);
    const {rollNo, avatar} = req.body;

    const {response , error} = await supabase
    .from('User')
    .update({avatar: avatar})
    .eq('rollNo', rollNo)

    if(error) {
        console.log(error);
       return res.status(500).json({error: 'Internal Server Error'})
    }
    else {
       return res.status(200).json({message: 'Avatar updated'})
    }
})

app.post('/result', async ( req, res) => {
    console.log(req.body);
    const {rollNo, marks, sticker} = req.body;
    const makrsArray = [parseInt(marks)];
    const stickersArray = [sticker];

    let { data , error} = await supabase
    .from('User')
   .select('Marks,stickers')
    .eq('rollNo', rollNo)

    if(error) {
        console.log(error);
       return res.status(500).json({error: 'Internal Server Error'})
    }
    console.log(data);
    let updatedMarks;
    let updatedStickers;
    
   updatedMarks = data[0].Marks? [...data[0].Marks, ...makrsArray] : makrsArray;
    updatedStickers = data[0].stickers? [...data[0].stickers, ...stickersArray] : stickersArray;

    const response = await supabase
    .from('User')
    .update({Marks: updatedMarks, stickers: updatedStickers})
    .eq('rollNo', rollNo)

    if(response.error) {
        console.log(response.error);
        return res.status(500).json({error: 'Internal Server Error'})
    }
    else {
        return res.status(200).json({message: 'Result updated'})
    }


    
})

app.get('/data/:rollNo', async( req, res) => {

    const rollNo = req.params.rollNo;
    const {data, error} = await supabase 
    .from('User')
    .select('avatar,stickers,Marks')
    .eq('rollNo', rollNo)

    if(error) {
        console.log(error);
       return res.status(500).json({error: 'Internal Server Error'})
    }
    else {
       return res.status(200).json({data: data[0]})
    }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server running on port');
})

