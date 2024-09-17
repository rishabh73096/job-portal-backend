import NewJobSheetModels from "../models/NewJobSheet.models.js";
import upload from "../middleware/image.multer.middleware.js";

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

   
      if (req.files) {
        if (req.files.imageDocument) {
          imageDocument = req.files.imageDocument[0].filename;
        }
        if (req.files.uploadInventory) {
          uploadInventory = req.files.uploadInventory[0].filename;
        }
      }

      
      const NewJobSheetDocument = new NewJobSheetModels({
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

 
      await NewJobSheetDocument.save();
      res.status(201).send("Thank you for your registration.");
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error, unable to save data" });
    }
  });
};
