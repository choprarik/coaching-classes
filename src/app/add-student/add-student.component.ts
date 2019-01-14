import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStudent } from '../students/IStudent';
import { StudentsService } from '../students/students.service';

@Component({
  selector: 'sg-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {

  pageTitle = 'Add Student';

  studentAddFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _route: Router, private studentService: StudentsService) {
    this.studentAddFormGroup = this._formBuilder.group({
      nameCtrl: ['', [Validators.required]],
      classCtrl: ['', [ Validators.required]],
      parentCtrl: ['', [Validators.required]],
      addrCtrl: ['', [Validators.required]],
      joinDateCtrl: [''],
      imgCtrl: [''],
      contactCtrl: ['', [Validators.required]]
    });
   }

  ngOnInit() {

  }

  addStudent() {
    if (this.studentAddFormGroup.errors) {
      alert('All fields are mandatory');
    }
    let student: IStudent;
    student.studentName = this.studentAddFormGroup.get('nameCtrl').value;
    student.studentClass = this.studentAddFormGroup.get('classCtrl').value;
    student.parentName = this.studentAddFormGroup.get('parentCtrl').value;
    student.contact = this.studentAddFormGroup.get('contactCtrl').value;
    student.address = this.studentAddFormGroup.get('addrCtrl').value;
    const date = new Date();
    student.joinDate = date.toDateString();
    this.studentService;
  }

  resetForm(){
    this.studentAddFormGroup.reset();
  }

  cancel() {
    this._route.navigate['/students'];
  }

}
