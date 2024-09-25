import mongoose from "mongoose"
import User from "./dbModel1.js"

const chatSchema = new mongoose.Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [
        {
            senderId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
            content: String,   
            timestamp: { type: Date, default: Date.now }  
        }
    ]
});


const ChatTalking = mongoose.model('Chat__Talking', chatSchema);
export  default  ChatTalking // 