const express = require('express');
const router = express.Router();
const Application = require('../../models/application');
const applicationController= require('../../controllers/applicationController');
const Job = require('../../models/job');
const jobController= require('../../controllers/jobController');

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

// get job details by applicationID
// router.get('/getJobDetails/:applicationId', async (req, res) =>{
//   const application = await applicationController.search('id', req.params.applicationId);
//   const jobId= application.jobId;
//   const job = await jobController.search('id', jobId);
//   return res.json({ 
//     jobTitle: job.jobTitle,
//     category:job.category,
//     companyName: job.companyName,
//     city: job.city,
//     country:job.country,
//     jobType:job.jobType,
//     careerLevel:job.careerLevel,
//     languages: job.languages,
//     datePosted: job.datePosted});
// });

// get a certain application by jobID
router.get('/getByjobID/:jobId', async (req, res) =>{
  const application = await applicationController.search('jobId', req.params.jobId);
  return res.json({ data: application })
});

//Create New application
router.post('/CreateANewApplication/:employerId/:jobId', async (req, res) => {
	const newApplication = await applicationController.create(req.body,req.params.employerId,req.params.jobId);
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