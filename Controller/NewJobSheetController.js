import upload from "../middleware/image.multer.middleware.js";
import EmployeeSchema from "../models/NewJobSheet.models.js"; // Correct model name

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

export const getAllJobSheets = async (req, res) => {
  try {
    const jobSheets = await EmployeeSchema.find();
    res.status(200).json(jobSheets);
  } catch (error) {
    console.error("Error fetching job sheets:", error);
    res.status(500).json({ error: "Server error, unable to retrieve data" });
  }
};

export const updateJobSheet = async (req, res) => {
  const { clientId } = req.params; // Get clientId from request parameters
  const updatedData = req.body; // Data to update from the request body

  console.log(req.params); // Check if clientId is present
  console.log(req.body); // Check the data being sent for the update

  try {
    // Find the job sheet using clientId and update the record
    const jobSheet = await EmployeeSchema.findOneAndUpdate(
      { clientId }, // Find by clientId
      updatedData, // Update with new data
      { new: true, runValidators: true } // Options to return the updated document and run validators
    );

    if (!jobSheet) {
      return res.status(404).json({ error: "Job sheet not found" });
    }

    res.json(jobSheet); // Return the updated job sheet
  } catch (error) {
    console.error("Error updating job sheet:", error);
    res
      .status(500)
      .json({ error: "Server error while updating the job sheet" });
  }
};

export const getProfileByClientId = async (req, res) => {
  const { clientId } = req.query;  // Access clientId from query parameters
  console.log("client id is", clientId);

  try {
    const profile = await EmployeeSchema.findOne({ clientId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile by clientId:", error);
    res.status(500).json({ error: "Server error" });
  }
};

