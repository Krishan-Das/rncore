import mongoose from "mongoose";

const v2TodoSchema = new mongoose.Schema(
{
 title:{
   type:String,
   required:true
 },

 isCompleted:{
   type:Boolean,
   default:false
 },

 userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"V2User",
   required:true
 }
},
{
 timestamps:true
}
);


export default mongoose.model(
 "V2Todo",
 v2TodoSchema
);