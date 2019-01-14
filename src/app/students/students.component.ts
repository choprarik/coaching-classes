import { Component, OnInit } from '@angular/core';
import { IStudent } from './IStudent';
import { StudentsService } from './students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sg-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    pageTitle = 'Student List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredStudents = this._listFilter ? this.performFilter(this._listFilter) : this.students;
    }

    filteredStudents: IStudent[];
    students: IStudent[];
    errorMessage: string;

    constructor(private _studentsService: StudentsService, private _router: Router) {
    }
    ngOnInit(): void {
        this._studentsService.getStudents()
        .subscribe(students => {
            this.students = students;
            this.filteredStudents = this.students;
        },
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.students.filter((student: IStudent) =>
            student.studentName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Student List: ' + message;
    }

    addStudent() {
        this._router.navigate(['./add']);
    }
}

