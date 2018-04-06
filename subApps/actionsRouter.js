const express = require("express");
const router = express.Router();
const db = require("../data/helpers/actionModel.js");

// GET
router.get("/", (req, res) => {
  db
    .get()
    .then(response => {
      console.log("get func without params used!");
      res.status(200).json(response);
    })
    .catch(er => {
      res.status(500).json({ err: "Server error encountered.." });
    });
});

// GET by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(action => {
      console.log("get func used!");
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ error: "Server error encountered.." });
    });
});

// POST
router.post("/", (req, res) => {
  const action = req.body;

  db
    .insert(action)
    .then(response => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: "Server error encountered while attempting to add post.."
      });
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db
    .remove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Server error encountered while deleting post.." });
    });
});

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const action = req.body;

  db
    .update(id, action)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ err: "Server error encountered while updating post.." });
    });
});

module.exports = router;
