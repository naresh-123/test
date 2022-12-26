import { Component, OnInit } from '@angular/core';
import { UserDefinedLabels } from './label-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  customerIDProof:any;
  labels = UserDefinedLabels;
  title = 'studentprject';
studentDetailsList:any;
  ngOnInit(){
    this.studentDetailsList=[
      {
      'name':'Naresh',
        'gender':'Male',
        'primaryEmail':'naresh65@gmail.com',
        'primaryMobile':'8746564645',
        'addressLine1':'Nandyal',
        'session':'Platinum'
    },
    {
      'name':'Charan',
        'gender':'Male',
        'primaryEmail':'charan335@gmail.com',
        'primaryMobile':'8746564645',
        'addressLine1':'Kadapa',
        'session':'Platinum'
    },
    {
      'name':'Sumalatha',
        'gender':'Female',
        'primaryEmail':'sumlatha65@gmail.com',
        'primaryMobile':'8746564645',
        'addressLine1':'Kurnool',
        'session':'Gold'
    },
    {
      'name':'Nainith',
        'gender':'Male',
        'primaryEmail':'nainith65@gmail.com',
        'primaryMobile':'8746564645',
        'addressLine1':'Nandyal',
        'session':'Sliver'
    }
  ]
  sessionStorage.setItem('studentDetailsList', JSON.stringify(this.studentDetailsList));
  }

}
