import mongoose from 'mongoose';



const commentSchema = new mongoose.Schema({
    textQuestion: { type: String, required: true },
    id: { type: String, required: true }, // Plain String ID
    name: { type: String, required: true },
    answerUser: { type: String },
    rept : {type:String}
    
}, { timestamps: true });




const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    commentsFromAdmin: [commentSchema], // here i think can handel many message here
    isAdmin:Boolean
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);
