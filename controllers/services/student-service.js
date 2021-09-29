const Student = require("../../models/Student");
class StudentService{
    async create(payload){
        const {  name, division, id, year } = payload;
        const student = await Student.create({ name, division, id, year});
        return student;
    }
    async findStudentById(payload){
        const { id } = payload;
        const student = await Student.findOne({ id });
        return student;
    }
    async update(payload){
        const { studentId, name, division, id, year } = payload;
        const student = await Student.findOneAndUpdate({ id: studentId }, {$set: { name, division, id, year} },{ returnDocument: 'after' });
        return student;
    }
    async delete(payload){
        const { id } = payload;
        const student = await Student.findOneAndDelete({ id });
        return student;
    }
    async allStudents(){
        const students = Student.find();
        return students;
    }
    async allStudentsByDiv(payload){
        const { division } = payload
        const students = Student.find({ division });
        return students;
    }
}

module.exports = new StudentService()