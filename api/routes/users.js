const router = require("express").Router();
const User = require("../models/User"); // grab user user model
const Posts = require("../models/Posts")
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", async (req,res)=> {
    if (req.body.userId === req.params.id) { // using the :id from the url
        if(req.body.password) { // if a password is sent, rehash it
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            }, {new : true });
            res.status(200).json(updatedUser);
        } catch (err ){
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can only update your account.");
    }
});

// DELETE
// this delete method only verifies using url:id === userId
// does not use username to verify anything
router.delete("/:id", async (req,res)=> {
    if (req.body.userId === req.params.id) { // using the :id from the url
        try {
            const user = await User.findById(req.params.id)
            try {
                await Posts.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...")
            } catch (err){
                console.log(err)
                res.status(500).json(err);
            }
        } catch {
            res.status(404).json("User not found")
        }
    } else {
        res.status(401).json("You can only delete your account.");
    }

});


// GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;