const express = require('express');
const router = express.Router();
const Cv = require('../../models/cv');
const cvController= require('../../controllers/cvController');
const JobSeeker = require('../../models/jobSeeker');


// get all cvs
router.get('/getAllCvs', async (req,res) => {
  const cvs = await cvController.search();
  return res.json({ data: cvs });
});

// get a certain Cv by ID
router.get('/getByID/:id', async (req, res) =>{
    const cv = await cvController.search('id', req.params.id);
    // console.log(cv)
    return res.json({ data: cv })
}); 

// get a certain Cv by jobSeekerID
router.get('/getByJobSeekerId/:jobSeekerId', async (req, res) =>{
  const cv = await cvController.search('jobSeekerId', req.params.jobSeekerId);
  // console.log(cv[0]._id)
  return res.json({ data: cv })
});

//Create New Cv
router.post('/CreateANewCv/:jobSeekerId', async (req, res) => {
  const newCv = await cvController.create(req.body);
  console.log(newCv)
  const jobSeeker= await JobSeeker.findById(req.params.jobSeekerId)
  newCv.firstName=jobSeeker.firstName;
  newCv.lastName=jobSeeker.lastName;
  newCv.address=jobSeeker.address + "-" + jobSeeker.city + "-" + jobSeeker.country+ ".";
  newCv.mobileNumber=jobSeeker.mobileNumber;
  newCv.email=jobSeeker.email;
  newCv.birthdate=jobSeeker.birthdate;
  newCv.jobSeekerId=req.params.jobSeekerId
  await newCv.save();
  return res.json({ data: newCv });
});

//Update A Cv
router.put('/updateACv/:id', async (req, res) => {
    try {
      const updatedCv= await cvController.update('id',req.params.id,req.body)
      res.json({ updatedCv, msg: 'Cv updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

//Update A Cv
router.put('/addANewLanguage/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const languages=cv.languages
    console.log(languages)
    const newLanguage=req.body.newLanguage
    console.log(newLanguage)
    cv.languages.push(newLanguage)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Add a new language
router.put('/addANewLanguage/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const languages=cv.languages
    console.log(languages)
    const newLanguage=req.body.newLanguage
    console.log(newLanguage)
    cv.languages.push(newLanguage)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete a language
router.put('/deleteALanguage/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const languages=cv.languages
    const temp=[]
    // console.log(languages)
    const oldLanguage=req.body.oldLanguage
    // console.log(oldLanguage)
    if(!languages.includes(oldLanguage))
    res.json({ msg: "The language you have entered doesn't exist! Please check it again" })
    for(var i=0;i<languages.length;i++)
    {
      if(languages[i]===oldLanguage)
      {
        languages.splice(i,1)
      }
    }
    console.log(languages)
    cv.languages=languages
    await cv.save();
    // console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Add a new communication skill
router.put('/addANewCommunicationSkill/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const communicationSkills=cv.communicationSkills
    console.log(communicationSkills)
    const newCommunicationSkill=req.body.newCommunicationSkill
    console.log(newCommunicationSkill)
    cv.communicationSkills.push(newCommunicationSkill)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete a communication skill
router.put('/deleteACommunicationSkill/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const communicationSkills=cv.communicationSkills
    const oldCommunicationSkill=req.body.oldCommunicationSkill
    console.log(oldCommunicationSkill)
    if(!communicationSkills.includes(oldCommunicationSkill))
    res.json({ msg: "The skill you have entered doesn't exist! Please check it again" })
    for(var i=0;i<communicationSkills.length;i++)
    {
      if(communicationSkills[i]===oldCommunicationSkill)
      {
        communicationSkills.splice(i,1)
      }
    }
    console.log(communicationSkills)
    cv.communicationSkills=communicationSkills
    await cv.save();
    // console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})


//Add a new internship 
router.put('/addANewInternship/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const internships=cv.internships
    console.log(internships)
    const newInternship=req.body.newInternship
    console.log(newInternship)
    cv.internships.push(newInternship)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete an internship
router.put('/deleteAnInternship/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const internships=cv.internships
    const oldInternship=req.body.oldInternship
    console.log(oldInternship)
    if(!internships.includes(oldInternship))
    res.json({ msg: "The internship you have entered doesn't exist! Please check it again" })
    for(var i=0;i<internships.length;i++)
    {
      if(internships[i]===oldInternship)
      {
        internships.splice(i,1)
      }
    }
    console.log(internships)
    cv.internships=internships
    await cv.save();
    // console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})


//Add a new workExperience 
router.put('/addANewWorkExperience/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const workExperience=cv.workExperience
    console.log(workExperience)
    const newWorkExperience=req.body.newWorkExperience
    console.log(newWorkExperience)
    cv.workExperience.push(newWorkExperience)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete a workExperience
router.put('/deleteAWorkExperience/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const workExperience=cv.workExperience
    const oldWorkExperience=req.body.oldWorkExperience
    console.log(oldWorkExperience)
    if(!workExperience.includes(oldWorkExperience))
    res.json({ msg: "The work experience you have entered doesn't exist! Please check it again" })
    for(var i=0;i<workExperience.length;i++)
    {
      if(workExperience[i]===oldWorkExperience)
      {
        workExperience.splice(i,1)
      }
    }
    console.log(workExperience)
    cv.workExperience=workExperience
    await cv.save();
    // console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Add a new studentActivity
router.put('/addANewStudentActivity/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const studentActivities=cv.studentActivities
    console.log(studentActivities)
    const newStudentActivity=req.body.newStudentActivity
    console.log(newStudentActivity)
    cv.studentActivities.push(newStudentActivity)
    await cv.save();
    console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete a studentActivity
router.put('/deleteAStudentActivity/:id', async (req, res) => {
  try {
    const cv = await cvController.search('id', req.params.id);
    const studentActivities=cv.studentActivities
    const oldStudentActivity=req.body.oldStudentActivity
    console.log(oldStudentActivity)
    if(!studentActivities.includes(oldStudentActivity))
    res.json({ msg: "The student activity you have entered doesn't exist! Please check it again" })
    for(var i=0;i<studentActivities.length;i++)
    {
      if(studentActivities[i]===oldStudentActivity)
      {
        studentActivities.splice(i,1)
      }
    }
    console.log(studentActivities)
    cv.studentActivities=studentActivities
    await cv.save();
    // console.log(cv)
    res.json({ cv, msg: 'Cv updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

 //Delete A Cv
 router.delete('deleteACv/:id', async (req,res) => {
    try {
     const deletedCv = await cvController.remove('id', req.params.id)
     const cvs= await cvController.search()
     res.json({msg:'CV was deleted successfully',cvs})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;

