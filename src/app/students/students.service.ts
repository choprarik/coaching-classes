import { Injectable } from '@angular/core';
import { IStudent } from "./IStudent";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { StudentData } from '../testdata/student-data';

@Injectable()
export class StudentsService {

    private readonly url = '/api/students';
    private studentList: IStudent[] = null;
    private testdata = new StudentData();

    private _productUrl = this.url;

    constructor(private _http: HttpClient) { }

    getStudents(): Observable<IStudent[]> {
        if (location.href.includes('localhost:4200')) {
            return this.testdata.getData('studentList');
        }
        return this._http.get<IStudent[]>(this._productUrl)
        .do(data => { this.studentList = data; })
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

    private getStudentById(studentId: number){
        return this.studentList.filter((student: IStudent) =>
            student.studentId === studentId);
    }

}
