const express = require('express');
const router = express.Router();
const Job = require('../../models/job');
const jobController= require('../../controllers/jobController');

// get all jobs
router.get('/getAllJobs', async (req,res) => {
  const jobs = await jobController.search();
  return res.json({ data: jobs });
});

// get a certain job by ID
router.get('/getByID/:id', async (req, res) =>{
    const job = await jobController.search('id', req.params.id);
    return res.json({ data: job })
}); 

// get jobs of a certain employer
router.get('/getJobsOfAnEmployer/:employerId', async (req,res) => {
     const employerId = req.params.employerId
     const jobs= await jobController.search('employerId', employerId)
     res.json({jobs})
});

//Create New job
router.post('/CreateANewJob', async (req, res) => {
  const newJob = await jobController.create(req.body);
  return res.json({ data: newJob });
});

//Update A job
router.put('/updateAJob/:id', async (req, res) => {
    try {
      const updatedJob= await jobController.update('id',req.params.id,req.body)
      res.json({ updatedJob, msg: 'job updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete A job
 router.delete('/deleteAJob/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedJob= await jobController.remove('id', req.params.id)
     const jobs= await jobController.search()
     res.json({msg:'job was deleted successfully',jobs})
    }
    catch(error) {

        console.log(error)
    }  
 })

 //Viewing the applications of a certian employee
 router.get('/getEmployeeAppliedJobs/:id', async (req, res) =>{
  const job = await jobController.search('id', req.params.id);
  return res.json({ data: job })
});

 //Employee apply to a job
router.put('/applyToAJob/:jobId/:userId',async (req, res) => {
      const jobId = req.params.jobId;
      const userId = req.params.userId;
      var job = await jobController.search("id", jobId);
      //if (job.error) return res.status(400).json({ error: job.error });
      //job = job[0].toJSON();
      var totalNumberOfApplicants=  job.totalNumberOfApplicants +1;
      job.totalNumberOfApplicants = totalNumberOfApplicants;
      var appliedApplicants= job.appliedApplicants;
      appliedApplicants.push(userId);
      job.appliedApplicants=appliedApplicants;
      await job.save();
      return res.json({
        msg: "User has applied successfully",
        data: job
      });
  }
);

router.put('/viewAnApplication/:jobId/:userId',async (req, res) => {
  const jobId = req.params.jobId;
  const userId = req.params.userId;
  var job = await jobController.search("id", jobId);
  //if (job.error) return res.status(400).json({ error: job.error });
  //job = job[0].toJSON();
  var numberOfViewedApplications=  job.numberOfViewedApplications +1;
  job.numberOfViewedApplications = numberOfViewedApplications;
  var viewedApplicants= job.viewedApplicants;
  viewedApplicants.push(userId);
  job.viewedApplicants=viewedApplicants;
  await job.save();
  return res.json({
    msg: "Application has been viewed successfully",
    data: job
  });
}
);

 //Employer accept an applicant
 router.put('/AcceptAJobSeeker/:jobId/:userId',async (req, res) => {
  const jobId = req.params.jobId;
  const userId = req.params.userId;
  var job = await jobController.search("id", jobId);
  //if (job.error) return res.status(400).json({ error: job.error });
  //job = job[0].toJSON();
  var numberOfAcceptedApplications=  job.numberOfAcceptedApplications +1;
  job.numberOfAcceptedApplications = numberOfAcceptedApplications;
  var acceptedApplicants= job.acceptedApplicants;
  acceptedApplicants.push(userId);
  job.acceptedApplicants=acceptedApplicants;
  await job.save();
  return res.json({
    msg: "User has been accepted successfully",
    data: job
  });
}
);

//Employer reject an applicant
router.put('/RejectAJobSeeker/:jobId/:userId',async (req, res) => {
  const jobId = req.params.jobId;
  const userId = req.params.userId;
  var job = await jobController.search("id", jobId);
  //if (job.error) return res.status(400).json({ error: job.error });
  //job = job[0].toJSON();
  var numberOfRejectedApplications=  job.numberOfRejectedApplications +1;
  job.numberOfRejectedApplications = numberOfRejectedApplications;
  var rejectedApplicants= job.rejectedApplicants;
  rejectedApplicants.push(userId);
  job.rejectedApplicants=rejectedApplicants;
  await job.save();
  return res.json({
    msg: "User has been rejected ",
    data: job
  });
}
);

 module.exports = router;
