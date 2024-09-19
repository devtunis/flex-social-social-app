import mongoose from 'mongoose';


const receiveMessageFromAdminSchema = new mongoose.Schema({
    textQuestion: { type: String, required: true },
    id: { type: String, required: true }, // Plain String ID
    name: { type: String, required: true },
    answerFromAdminToUser: { type: String },
    scoreUser: { type: Number }
}, { timestamps: true });



const myQuestion = new mongoose.Schema({
    textQuestion: { type: String, required: true },
    id: { type: String, required: true }, // Plain String ID
    name: { type: String, required: true },
    answerFromAdminToUser: { type: String },
    scoreUser: { type: Number }
}, { timestamps: true });



// Main schema for users and their questions
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },  
    imgUser :{type:String},
    receiveMessages: [receiveMessageFromAdminSchema],
    myQuestionsBasket : [myQuestion] ,// here add basket to see my all question i wannna asked and then should be deleted for me if i want
    password : String 
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
