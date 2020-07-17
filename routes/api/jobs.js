const express = require('express');
const router = express.Router();
const Job = require('../../models/job');
const jobController= require('../../controllers/jobController');
const JobSeeker = require('../../models/jobSeeker');
const jobSeekerController= require('../../controllers/jobSeekerController');
const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

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
router.post('/CreateANewJob/:employerId', async (req, res) => {
  const newJob = await jobController.create(req.body,req.params.employerId);
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
     const deletedJob= await jobController.remove('id', req.params.id)
     const jobs= await jobController.search()
     res.json({msg:'job was deleted successfully',jobs})
    }
    catch(error) {

        console.log(error)
    }  
 })

//Save a job
router.put('/saveAJob/:userId/:jobId', async (req, res) =>{
  const jobSeeker = await jobSeekerController.search('id', req.params.userId);
  jobs=jobSeeker.savedJobs
  const job = await jobController.search('id', req.params.jobId);
  var flag=false
  for(var i=0;i<jobs.length;i++)
  {

    // var temp=ObjectId(jobs[i]._id).toString()
    var temp =""+jobs[i]._id
    console.log(temp)
    console.log(req.params.jobId)
    if(temp===req.params.jobId)
    {
      flag=true

    }
  }
  if(flag===true)
  {
    return res.json({ msg:"You have already saved this job before. You can view it in the 'Saved jobs' page."})
  }
  else
  {
  jobs.push(job)
  jobSeeker.savedJobs=jobs
  await jobSeeker.save()
  return res.json({ msg:"The job has been saved successfully"})
  }
});

//unSave a job
router.put('/unsaveAJob/:userId/:jobId', async (req, res) =>{
  const jobSeeker = await jobSeekerController.search('id', req.params.userId);
  jobs=jobSeeker.savedJobs
  var flag=false
  for(var i=0;i<jobs.length;i++)
  {

    // var temp=ObjectId(jobs[i]._id).toString()
    var temp =""+jobs[i]._id
    console.log(temp)
    console.log(req.params.jobId)
    if(temp===req.params.jobId)
    {
      jobs.splice(i,1)

    }
  }
  
  jobSeeker.savedJobs=jobs
  await jobSeeker.save()
  return res.json({ msg:"The job has been saved successfully"})
  
});


//Get saved jobs of a job seeker
router.get('/getSavedJobs/:userId', async (req, res) =>{
  const jobSeeker = await jobSeekerController.search('id', req.params.userId);
  var savedJobs= jobSeeker.savedJobs
  console.log(savedJobs)
  var jobs=[]
  for(var i=0;i<savedJobs.length;i++)
  {
    const job = await jobController.search('id',savedJobs[i]);
    jobs.push(job)
  }
  console.log(jobs)
 return res.json({ data:jobs})
});

//Get jobs by category and type
router.post('/getJobsByCategoryAndType', async (req, res) =>{
  const jobs = await jobController.search();
  const categories= req.body.categories
  const types=req.body.types
  const wantedJobs=[]
  const wantedTemp=[]
  if(categories.length===0 && types.length===0)
  {
    console.log(res.data.data)
    return res.json({ data:jobs})
  }
  if(categories.length===0)
  {
    for (var i=0;i<jobs.length;i++)
    {
      const type=jobs[i].jobType
      if(types.includes(type))
      {
        wantedJobs.push(jobs[i])
      }
   }
   return res.json({ data:wantedJobs})
  }

  if(types.length===0)
  {
    for (var j=0;j<jobs.length;j++)
    {
      const category=jobs[j].category
      if(categories.includes(category))
      {
        wantedJobs.push(jobs[j])
      }
   }
   return res.json({ data:wantedJobs})
  }

  for (var k=0;k<jobs.length;k++)
  {
    const category=jobs[k].category
    if(categories.includes(category))
    {
      wantedTemp.push(jobs[k])
    }
  }
  for (var l=0;l<wantedTemp.length;l++)
  {
    const type=wantedTemp[l].jobType
    if(types.includes(type))
    {
      wantedJobs.push(wantedTemp[l])
    }
  }
 return res.json({ data:wantedJobs})
});


//Get the number of jobs
router.get('/getNumberOfJobs', async (req, res) =>{
  const jobs = await jobController.search();
  const categories= req.body.categories
  const wantedJobs=[]
  if(categories.length===0)
  {
    return res.json({ data:jobs.length})
  }
  for (var i=0;i<jobs.length;i++)
  {
    const category=jobs[i].category
    if(categories.includes(category))
    {
      wantedJobs.push(jobs[i])
    }
  }
 return res.json({ data:wantedJobs.length})
});


 //Viewing the applications of a certian employee
 router.get('/getEmployeeAppliedJobs/:userId', async (req, res) =>{
  const jobs = await jobController.search();
  var appliedJobs=[]
  var status=[]
  for(var i=0;i<jobs.length;i++)
  {
    var appliedApplicants=jobs[i].appliedApplicants;
    if(appliedApplicants.includes(req.params.userId))
    {
      appliedJobs.push(jobs[i])
    }
  }

  for(var j=0;j<appliedJobs.length;j++)
  {
    var viewedApplicants=appliedJobs[j].viewedApplicants;
    var acceptedApplicants=appliedJobs[j].acceptedApplicants;
    var rejectedApplicants=appliedJobs[j].rejectedApplicants;
    if(rejectedApplicants.includes(req.params.userId))
      status.push("Rejected")
      else if (acceptedApplicants.includes(req.params.userId))
      {
        status.push("Accepted")
      }
      else if (viewedApplicants.includes(req.params.userId))
      {
        status.push("Viewed")
      }
      else 
      {
        status.push("Applied")
      }
  }
  return res.json({ appliedJobs: appliedJobs, status:status })
});


 //Employee apply to a job
router.put('/applyToAJob/:userId/:jobId',async (req, res) => {
      const jobId = req.params.jobId;
      const userId = req.params.userId;
      var job = await jobController.search("id", jobId);
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

//Employee apply to a job
router.get('/checkApplied/:userId/:jobId',async (req, res) => {
  const jobId = req.params.jobId;
  const userId = req.params.userId;
  var job = await jobController.search("id", jobId);
  var appliedApplicants= job.appliedApplicants;
  if(appliedApplicants.includes(userId))
  {
    return res.json({
      msg: "You've already applied to this job. You can view, edit and track your application in the 'Applications' page.",
    });
  }
  else{
  return res.json({
    msg: "To apply for this job, you have to fill an application first."
  });
}
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
