import upload from "../middleware/image.multer.middleware.js";
import EmployeeSchema from "../models/NewJobSheet.models.js";  // Correct model name

// Function to handle the creation of a new job sheet
export const NewJobSheet = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const NewJobSheetObject = req.body;
    console.log(NewJobSheetObject);

    const {
      clientId,
      clientName,
      contactInfo,
      receivedDate,
      inventoryReceived,
      reportedIssue,
      clientNotes,
      assignedTechnician,
      deadline,
      estimatedAmount,
      status,
    } = NewJobSheetObject;

    try {
      let uploadInventory = "";
      let imageDocument = "";

      // Handling file uploads
      if (req.files) {
        if (req.files.imageDocument) {
          imageDocument = req.files.imageDocument[0].filename;
        }
        if (req.files.uploadInventory) {
          uploadInventory = req.files.uploadInventory[0].filename;
        }
      }

      // Create a new job sheet document
      const NewJobSheetDocument = new EmployeeSchema({
        clientId: clientId,
        clientName: clientName,
        contactInfo: contactInfo,
        receivedDate: receivedDate,
        inventoryReceived: inventoryReceived,
        reportedIssue: reportedIssue,
        clientNotes: clientNotes,
        assignedTechnician: assignedTechnician,
        deadline: deadline,
        estimatedAmount: estimatedAmount,
        status: status,
        imageDocument: imageDocument,
        uploadInventory: uploadInventory,
      });

      // Save the job sheet to the database
      await NewJobSheetDocument.save();
      res.status(201).send("Thank you for your registration.");
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error, unable to save data" });
    }
  });
};

// Function to retrieve all job sheets
export const getAllJobSheets = async (req, res) => {
  try {
    const jobSheets = await EmployeeSchema.find();  // Using EmployeeSchema to fetch data
    res.status(200).json(jobSheets);
  } catch (error) {
    console.error("Error fetching job sheets:", error);
    res.status(500).json({ error: "Server error, unable to retrieve data" });
  }
};
