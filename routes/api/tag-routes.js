const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag,
    }],
  })
    .then((allTags) => {
      // checks if no tags were found
      if (allTags.length === 0) {
        res.status(404).json({ message: 'No Tags found in this database' });
        return;
      }

      res.status(200).json(allTags);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get individual tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [{
      model: Product,
      through: ProductTag,
    }],
  })
    .then((singleTag) => {
      if (!singleTag) {
        res.status(404).json({ message: `No tag with id: ${req.params.id} found` });
        return;
      }
      res.status(200).json(singleTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new tag

  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag)
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  //remember: update method returns an array of affected rows- not an object directly
  const { tag_name } = req.body;
  if (!tag_name) {
    res.status(404).json({ message: `No tag name has been provided` });
    return;
  }
  Tag.update({ tag_name }, { //only updating tag_name taken from req.body
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      if (result[0] === 0) {
        res.status(404).json({ message: `No tag name associated with ${req.params.id}` });
        return;
      }
      return Tag.findByPk(req.params.id);
           
    })
    .then ((newTag) =>{
      if (!newTag) {
        res.status(404).json({message: `Could not retrieve new tag`});
        return;
      }
      res.status(200).json(newTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
  .then ((deletedTag) =>{
    if (deletedTag === 0) {
      res.status(404).json({message: `No tage with id: ${req.params.id} was found`});
      return;
    }
    res.status(200).json({message: `Tag with id: ${req.params.id} was deleted` });
  })
  .catch ((err) => {
    res.status(500).json(err);
  })
});

module.exports = router;
