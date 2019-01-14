var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FeesSchema = new Schema({
    totalFees: number,
    feesPaid: number,
    lastPayDate: string,
	dueDate: string
});

var StudentSchema   = new Schema({
    studentId: number,
    studentName: string,
    studentClass: string,
    joinDate: string,
    contact: number,
    address: string,
    parentName: string,
    imageUrl: string,
    fees: FeesSchema
});

module.exports = mongoose.model('Student', StudentSchema);