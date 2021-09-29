const router = require('express').Router();
const StudentController = require("../controllers/student-controller")
const TokenController = require("../controllers/token-controller")
let { requireAuth } = require("../middlewares/auth")


router.get("/api/findStudentById/:studentId", requireAuth, StudentController.findStudentById)
router.post("/api/createStudent", requireAuth, StudentController.createStudent )
router.post("/api/updateStudent/:studentId", requireAuth, StudentController.updateStudent )
router.post("/api/deleteStudent/:studentId", requireAuth, StudentController.deleteStudent )
router.get("/api/getAllStudents", requireAuth, StudentController.getAllStudents)
router.get("/api/getAllStudentsByDiv/:division", requireAuth, StudentController.getAllStudentsByDiv)
router.get("/api/getToken/", TokenController.generateToken )

module.exports = router