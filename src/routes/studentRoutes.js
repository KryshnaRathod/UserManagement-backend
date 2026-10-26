const express = require("express");

const router = express.Router();

const {
  getStudents,
  getFirstNames,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  addCourse,
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");

// Public - no token required for fetching
router.get("/",authMiddleware, getStudents);

// Search students by name or email (?search= or ?q=)
router.get("/search", authMiddleware, getStudents);

// First-name suggestions for the search dropdown (?q=)
router.get("/first-names", authMiddleware, getFirstNames);

router.get("/:id",authMiddleware, getStudentById);

router.post("/", authMiddleware, createStudent);

router.put("/:id", authMiddleware, updateStudent);

router.delete("/:id", authMiddleware, deleteStudent);

router.post(
  "/:id/courses",
  authMiddleware,
  addCourse
);

module.exports = router;