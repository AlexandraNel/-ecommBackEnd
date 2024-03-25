const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      include: [{
        model: Product
      }],    
    });

    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err)  
  };
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{ 
    const oneCategory = await Category.findOne({
      where: { 
        id: req.params.id },

        include: [{
          model: Product
        }],
    });

    if(!oneCategory) {
      return res.status(404).json({message: 'No category witht his id found'});
    }

    res.status(200).json(oneCategory);

  }catch (err) {
    res.status(500).json(err)
  }
  });

   
router.post('/', async (req, res) => {
   // create a new category
  try{
    const newCategory = await Category.create({
      ...req.body,
    })

    res.status(200).json(newCategory);

  } catch (err) {
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value. 
  try{
    const editCategory = await Category.update( req.body, {
      where: {id: req.params.id}
    });
    // update returns an array or affected rows 

    if (editCategory === 0){
      res.status(404).json({ message: 'No category with this id has been updated'});
      return;
    }
    //return update category
    const updatedCategory = await Category.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(updatedCategory)

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deleteCategory) {
      res.status(404).json({ message: 'No category with that id was found or deleted'});
      return;
    }

    res.status(200).json({ message: `Category ${req.params.id} successfully deleted`});
    
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
