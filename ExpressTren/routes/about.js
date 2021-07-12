const express=require('express'),
router=express.Router();


router.get('/', (req, res) => {
    res.send('about')
})


module.exports = router;