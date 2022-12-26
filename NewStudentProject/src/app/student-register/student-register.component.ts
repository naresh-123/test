import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserDefinedLabels } from '../label-constants';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  @ViewChild('studentobjCheck', { static: false }) studentobjCheck;
  labels = UserDefinedLabels;
  customerIDProof:any;
  gender:any;
  studentDetailsObj:any={};
  studentDetailsList:any=[];
  length: number;
  datasource;
  createFlag:boolean=false;
  editFlag:boolean=false;
  viewFlag:boolean=false;
  editIndex:number;
  sessionList:any=[];
  pageSizes:any;
  displayedColumns: string[] = ['seqNo', 'cityName', 'cityCode', 'stateName', 'districtName', 'action'];
  constructor() { }

  ngOnInit() {
    this.datasource = new MatTableDataSource();
    this.pageSizes = [2,4,6];
    this.gender=[{
      'item':'Male'
    },
    {
    'item':'Female'
    },
  ]
  this.sessionList=[{
    'item':'Platinum'
  },{
  'item':'Gold'
  },
  {
  'item':'Sliver'
  },
]
 this.studentDetailsList = JSON.parse(sessionStorage.getItem('studentDetailsList'));
this.datasource.data = this.studentDetailsList;
this.length=this.studentDetailsList.length;
  }

  studentSubmit(){
   // this.studentDetailsList.push(this.studentDetailsObj);
   if(this.editIndex == null){
    const obj={
      'name':this.studentDetailsObj.name,
      'gender':this.studentDetailsObj.gender,
      'primaryEmail':this.studentDetailsObj.primaryEmail,
      'primaryMobile':this.studentDetailsObj.primaryMobile,
      'addressLine1':this.studentDetailsObj.addressLine1,
      'session':this.studentDetailsObj.session
    }
    //this.studentobjCheck.reset();
    this.studentDetailsList.push(obj);
    this.datasource.data = this.studentDetailsList;
    this.length=this.studentDetailsList.length;
    console.log('dkdjdd',this.studentDetailsList,this.studentDetailsObj)
    this.studentobjCheck.reset();
  }else{
    const obj={
      'name':this.studentDetailsObj.name,
      'gender':this.studentDetailsObj.gender,
      'primaryEmail':this.studentDetailsObj.primaryEmail,
      'primaryMobile':this.studentDetailsObj.primaryMobile,
      'addressLine1':this.studentDetailsObj.addressLine1,
      'session':this.studentDetailsObj.session
    }
    this.studentDetailsList.splice(this.editIndex, 1, obj)
    this.datasource.data = this.studentDetailsList;
    this.length=this.studentDetailsList.length;
    this.editIndex=null;
    this.studentobjCheck.reset();
  }
  this.createFlag=false;
  this.editFlag=false
  sessionStorage.setItem('studentDetailsList', JSON.stringify(this.studentDetailsList));
  console.log('dkddk',this.studentDetailsList)
  }

  customerReset() {

    this.studentobjCheck.reset();
    
  }
  isNumber(evt) {
    evt = (evt) ? evt : null;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  createStudent(){
    this.createFlag=true;
    this.viewFlag = false;
    this.editFlag = false;
    this.studentobjCheck.reset();
    this.editIndex = null;
  }
  editService(i,element) {
    console.log('djdjf',element,i)
    this.createFlag = false;
    this.viewFlag = false;
    this.editFlag = true;
   this.editIndex=i;
    this.studentDetailsObj = JSON.parse(JSON.stringify(element));
    
  }

  viewStudent(element){
    this.createFlag = false;
    this.editFlag = false;
    this.viewFlag = true;
    this.studentDetailsObj = JSON.parse(JSON.stringify(element));
  }

  
  deleteStudent(i) {
   
      this.studentDetailsList.splice(i, 1);
      this.datasource.data = this.studentDetailsList;
      sessionStorage.setItem('studentDetailsList', JSON.stringify(this.studentDetailsList));
  }
}
