import Mongoose from "mongoose";

const Employeeschema = new Mongoose.Schema({
  clientId: {
    type: String,
    unique: true
  },
  clientName: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  receivedDate: {
    type: Date,
  },
  inventoryReceived: {
    type: String,
  },
  uploadInventory: {
    type: String  
  },
  imageDocument: {
    type: String 
  },
  reportedIssue: {
    type: String,
  },
  clientNotes: {
    type: String
  },
  assignedTechnician: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  estimatedAmount: {
    type: Number,
  },
  status: {
    type: String,
   
  }
}, { timestamps: true });


const EmployeeSchema = Mongoose.model("EmployeeDetails", Employeeschema);

export default EmployeeSchema;