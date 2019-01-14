import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class StudentData {
    testdata = {
        studentList: [{
            studentId: 1,
            studentName: 'Ramesh',
            studentClass: '10',
            joinDate: '10/10/2018',
            contact: 9425104047,
            address: 'Chappan colony',
            parentName: 'Mahesh',
            imageUrl: null,
            fees: {
                totalFees: 1000,
                feesPaid: 500,
                lastPayDate: '10/10/2018',
                dueDate: '12/12/2018'
            }
        },
        {
            studentId: 2,
            studentName: 'Suresh',
            studentClass: '8',
            joinDate: '10/10/2018',
            contact: 9425104047,
            address: 'Chappan colony',
            parentName: 'Mahesh',
            imageUrl: null,
            fees: {
                totalFees: 1000,
                feesPaid: 500,
                lastPayDate: '10/10/2018',
                dueDate: '12/12/2018'
            }
        },
        {
            studentId: 3,
            studentName: 'Reema',
            studentClass: '11',
            joinDate: '10/10/2018',
            contact: 9425104047,
            address: 'Chappan colony',
            parentName: 'Mahesh',
            imageUrl: null,
            fees: {
                totalFees: 1000,
                feesPaid: 500,
                lastPayDate: '10/10/2018',
                dueDate: '12/12/2018'
            }
        }]
    };

    getData(type: string) {
        const obj = this.testdata[type];
        const subj = new BehaviorSubject(obj);
        return subj.asObservable();
    }
}
