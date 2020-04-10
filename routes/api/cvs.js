const express = require('express');
const router = express.Router();
const Cv = require('../../models/cv');
const cvController= require('../../controllers/cvController');

// get all cvs
router.get('/getAllCvs', async (req,res) => {
  const cvs = await cvController.search();
  return res.json({ data: cvs });
});

// get a certain Cv by ID
router.get('/getByID/:id', async (req, res) =>{
    const cv = await cvController.search('id', req.params.id);
    return res.json({ data: cv })
}); 

//Create New Cv
router.post('/CreateANewCv', async (req, res) => {
  const newCv = await cvController.create(req.body);
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

