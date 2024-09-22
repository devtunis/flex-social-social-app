import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import  QUESTION from "./dbModelQuestion.js"
import Admin from "./dbAdminSchema.js"
import User from "./dbModel1.js"
import ChatSession from "./dbChatMessages.js"
import cors from "cors"
import multer from 'multer';
import path from "path"
import dotenv from 'dotenv';
import WebSocket, { WebSocketServer } from 'ws';

dotenv.config();


const app = express();
const PORT = 9000;
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:CIsVjyXyoO8MjjAs@cluster0.de4vi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('MongoDB connected'); 
})

app.use(cors({
    origin: "http://localhost:3000",                  // this to acces the data from api 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

app.use(bodyParser.json({ limit: '10mb' })); // Increase the limit
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

 
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Increase as needed
});
 



 

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A new client connected.');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
 
 

























app.post("/postQuestion",async(req,res)=>{
    try{ 

        const SectionQustion = new QUESTION(req.body);
        await SectionQustion.save();
        res.status(201).send(SectionQustion)
    }
    catch(eroor){
        res.status(404).json({message : eroor})
        console.log(`this eroor  by ${eroor}`)
    }
})
app.get("/getQuestion",async(req,res)=>{
    try{ 

        const SectionQustion =  await  QUESTION.find();
        
        res.status(201).send(SectionQustion)
    }
    catch(eroor){
        res.status(404).json({message : eroor})
        console.log(`this eroor  by ${eroor}`)
    }
})
app.post('/setUserWithAnswer', upload.single('imgUser'), async (req, res) => {
    
      try {
        // Create a new user with the uploaded file data and other form data
        const formattedFilePath =  req.file.path.replace(/\\/g, '/');
    

        const setAnswer = new User({
          ...req.body,
          imgUser: formattedFilePath 

        });
      
        await setAnswer.save();
        res.status(200).json(setAnswer);
      } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(`The error: ${error}`);
      }
    });
app.post("/setAdmin",async(req,res)=>{
    try{
     const setAdmin = new Admin(req.body)
     await setAdmin.save()
     res.status(200).json(setAdmin)
    }catch(eror){
        res.status(404).json({message : eror})
        console.log(`the error by ${eror}`)
    }
})
 app.put('/Admins/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const newComments = req.body.commentsFromAdmin;
        const admin = await Admin.findById(userId);
        if (!admin) {
            return res.status(404).send('Admin not found')}
        admin.commentsFromAdmin.push(...newComments);
        await admin.save();
        res.send('Comments added successfully');
    } catch (error) {
        res.status(400).send(error);
    }
});
app.put('/setAdminstoUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const newComments = req.body.receiveMessages;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('Admin not found')
        
        }
        user.receiveMessages.push(...newComments);
        await user.save();
        res.send('Comments added successfully');
    } catch (error) {
        res.status(400).send(error);
    }
});
app.put('/putComment/:id', upload.single('image'), async (req, res) => {
    try {
        // Find the specific question by ID
        const UserCommentData = await QUESTION.findById(req.params.id);

        if (!UserCommentData) {
            return res.status(404).json({ message: "We did not find the question, we're sorry about that." });
        }

        // Add comments to the question
        if (req.body.Comment) {
            // Assuming req.body.Comment is an array of comment objects
            const comments = req.body.Comment
            UserCommentData.Comment.push(...comments);
        }

        // Handle image if it's uploaded
        if (req.file) {
            // Save image details (like path) to your database if necessary
            UserCommentData.images = UserCommentData.images || []; // Initialize if not present
            UserCommentData.images.push(req.file.path); // Store the image path
        }

        // Save updated data
        await UserCommentData.save();

        res.status(200).json({ message: "Updated successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get("/callComments/:id", async (req, res) => {
    try {
        // Find the specific question by ID
        const CallAllComment = await QUESTION.findById(req.params.id);
        if (!CallAllComment) {
            return res.status(404).json({ message: "We don't have anything for this ID" });
        }

        // Find all documents in the QUESTION collection
        const allQuestions = CallAllComment.Comment.sort((a,b)=>b.createdAt-a.createdAt)
       
            
        // Return all the extracted comments
        res.status(200).json(allQuestions);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get("/DashbordAdmin",async(req,res)=>{
    try{ 

        const AdminDashbord =  await  Admin.find();
        const res1 = AdminDashbord.map((b)=>b.commentsFromAdmin).flat()

        res.status(201).send(res1)
    }
    catch(eroor){
        res.status(404).json({message : eroor})
        console.log(`this eroor  by ${eroor}`)
    }
})
app.get("/allUsers",async(req,res)=>{
    try{
        const data = await User.find()
        res.status(200).json(data)
    }catch(eroor){
        console.log(`this eroor by ${eroor}`)
        res.status(402).json({message : eroor})
    }
})
app.post('/test-upload/:id', upload.single('image'), async (req, res) => {
    try {
        // Find the question by ID
        const UserCommentData = await QUESTION.findById(req.params.id);
        if (!UserCommentData) {
            return res.status(404).json({ message: "We did not find the question, we're sorry about that." });
        }

        // Create a new comment object
        const newComment = {
            id: req.body.id, // User ID
            comment: req.body.CommentText, // Comment text
            UsernameComment: req.body.UsernameComment, // Username
            ProfileImg : req.body.ProfileImg
        };

        // Add image path if an image was uploaded
        if (req.file) {
            newComment.imgComment = req.file.path; // Image path
        }

        // Add the comment to the question
        UserCommentData.Comment.push(newComment);

        // Save the updated question data
        await UserCommentData.save();

        res.status(200).json({ message: 'Comment uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
});
app.post("/ChatSession", async (req, res) => {
    try {
        const { idSession, PrivateSession } = req.body;

        // Log the request body to inspect the data
        console.log("Request Body:", req.body);

        if (!idSession || !Array.isArray(PrivateSession)) {
            return res.status(400).json({ message: "idSession and PrivateSession are required." });
        }

        // Create a new ChatSession object with multiple messages in the PrivateSession array
        const newChatSession = new ChatSession(req.body);

        // Log the newly created ChatSession object
        console.log("New ChatSession:", newChatSession);

        // Save the new chat session to the database
        await newChatSession.save();

        // Respond with a success message
        res.status(201).json({ message: "Chat session created successfully", session: newChatSession });
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.get("/getChatPostForAdmin",async(req,res)=>{
    try{
        const responseId = await ChatSession.find()
        res.status(200).json(responseId)

    }
    catch(index){
        console.log(index)
        res.status(404).json({message : index})
    }
})
app.put("/ChatSession/:idSession", async (req, res) => {
    try {
        const { idSession } = req.params;
        const { PrivateSession } = req.body; // Array of new messages

        if (!Array.isArray(PrivateSession)) {
            return res.status(400).json({ message: "PrivateSession should be an array of messages." });
        }

        // Find the session by idSession and push the new messages into the PrivateSession array
        const updatedSession = await ChatSession.findOneAndUpdate(
            { idSession },
            { $push: { PrivateSession: { $each: PrivateSession } } }, // Push each new message into the array
            { new: true } // Return the updated document
        );

        if (!updatedSession) {
            return res.status(404).json({ message: "Chat session not found" });
        }

        res.status(200).json({ message: "Messages added successfully", session: updatedSession });
    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.get("/getChat/:userid",async(req,res)=>{
    try{
     const reponseGetData  = await ChatSession.find({idSession:req.params.userid})
     res.status(200).json(reponseGetData[0].PrivateSession) // and this should be Handel This Data 
     
    }
    catch(eroor){
        console.log(`this eroor by ${eroor}`)
        res.status(404).json({message :  "this user not found in this data base check other data bases"})
        res.status(405).json({message : eroor})
    }
})
app.get("/auth/:email",async(req,res)=>{
    try{
     const response = await User.find({email:req.params.email})
     res.status(202).json(response)
    }
    catch(eroor){
        console.log(`this eroor by ${eroor}`)
        res.status(404).json({message : eroor})
    }
})

app.put("/check/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,
            {chatWithAdmin1:true},
            {new : true}
        );
        if (!user) {
            return res.status(404).json({ message: "This user does not exist" });
        }
        // inside  the user their chalo bame chatWithadmin i wanna chang this ture 
        res.status(200).json(user);
    } catch (error) {
        console.log(`This error caused: ${error}`);
        res.status(500).json({ message: error });
    }
});





app.use('/uploads', express.static('uploads'));



// ---------------Latex--------------



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
