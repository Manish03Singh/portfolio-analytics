import express from 'express'
import File from '../model/file.js';

const router = express.Router();

router.post('/addData',  async (req, res) => {
    try {
        const entry = {
            ip : req.body.ip,
            route : req.body.route,
            city : req.body.city,
            country : req.body.country,
            latitude : req.body.latitude,
            longitude : req.body.longitude,
            date : req.body.date,
        }
        const file = await File.find({ip : entry.ip, route : entry.route});
        
        if(Object.keys(file).length === 0){
            const newEntry = await File.create(entry);
        } else {
            const oldEntry = await File.findById(file[0]._id);
            oldEntry.date = entry.date;
            await oldEntry.save();
        }

        res.status(200).json({status : "success"})
    } catch(error) {
        console.log(`Error in addData. Error => ${error}`)
        res.status(500).json({error : error.message})
    }
});

router.get('/', (req, res) => {
    res.status(200).json('Backend is up')
});

export default router;



