const express = require('express');
const router = express.Router();
const Category = require('../../models/category');
const categoryController= require('../../controllers/categoryController');

// get all categories
router.get('/getAllCategories', async (req,res) => {
  const categories = await categoryController.search();
  return res.json({ data: categories });
});

// get a certain category by ID
router.get('/getByID/:id', async (req, res) =>{
    const category = await categoryController.search('id', req.params.id);
    return res.json({ data: category })
}); 

//Create New category
router.post('/CreateANewCategory', async (req, res) => {
  const newCategory = await categoryController.create(req.body);
  return res.json({ data: newCategory });
});

//Update A Category
router.put('/updateACategory/:id', async (req, res) => {
    try {
      const updatedCategory= await categoryController.update('id',req.params.id,req.body)
      res.json({ updatedCategory, msg: 'Category updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete A Category
 router.delete('deleteACategory/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCategory = await categoryController.remove('id', req.params.id)
     const categories= await categoryController.search()
     res.json({msg:'Category was deleted successfully',categories})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;
