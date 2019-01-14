import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../students/IStudent';

@Component({
  selector: 'sg-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  pageTitle: string = 'Student Detail';
  student: IStudent;

  constructor(private _route: ActivatedRoute, private studentsService: StudentsService) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this.student; 
  }

}
