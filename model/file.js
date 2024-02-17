import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    ip : {
        type : String,
        require : true
    },
    route : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    country : {
        type : String,
        require : true
    },
    latitude : {
        type : String,
        require : true
    }, 
    longitude : {
        type : String,
        require : true
    },
    date : {
        type : String,
        require: true
    },
    visit : {
        type : Number,
        require: true
    }
})

const File = mongoose.model('file',fileSchema)

export default File