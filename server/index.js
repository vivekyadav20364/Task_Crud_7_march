const express=require('express');
const app=express();
const saveRouter=require('./routers/saveRouter');
const connectDB=require("./config/connection");
const dotenv=require('dotenv');
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/data",saveRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT} `);
});

