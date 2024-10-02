import mongoose from "mongoose"
import User from "./dbModel1.js"

const chatSchema = new mongoose.Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  
    messages: [
        {
            senderId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
            content: String,   
            timestamp: { type: Date, default: Date.now }   ,
            imgUser : {type:String},
            vue: { type: String, default: "notSeen" },
            imgProfile : {type:String}
        }
    ]
});

//default :"https://cdn2.iconfinder.com/data/icons/team-work-8/512/avtar__member__avatar__profile_-512.png"
const ChatTalking = mongoose.model('Chat__Talking', chatSchema);
export  default  ChatTalking // 