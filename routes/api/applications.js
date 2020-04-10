const express = require('express');
const router = express.Router();
const Application = require('../../models/application');
const applicationController= require('../../controllers/applicationController');

// get all applications
router.get('/getAllApplications', async (req,res) => {
	const applications = await applicationController.search();
	return res.json({ data: applications });
});

// get a certain application by ID
router.get('/getByID/:id', async (req, res) =>{
    const application = await applicationController.search('id', req.params.id);
    return res.json({ data: application })
}); 

//Create New application
router.post('/CreateANewApplication', async (req, res) => {
	const newApplication = await applicationController.create(req.body);
	return res.json({ data: newApplication });
});

//Update An job
router.put('/updateAnApplication/:id', async (req, res) => {
    try {
      const updatedApplication= await applicationController.update('id',req.params.id,req.body)
      res.json({ updatedApplication, msg: 'application updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete An Application
 router.delete('/deleteAnApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedApplication = await applicationController.remove('id', req.params.id)
     const applications= await applicationController.search()
     res.json({msg:'application was deleted successfully',applications})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;