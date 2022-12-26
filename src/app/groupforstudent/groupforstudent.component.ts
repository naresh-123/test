import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupforstudent',
  templateUrl: './groupforstudent.component.html',
  styleUrls: ['./groupforstudent.component.scss']
})
export class GroupforstudentComponent implements OnInit {
  sessionPlatinum:any=[]
  sessionGold:any=[]
  sessionSliver:any=[];
  studentDetailsList:any[]=[];
  constructor() { }

  ngOnInit() {
    this.studentDetailsList = JSON.parse(sessionStorage.getItem('studentDetailsList'));
    // this.example=[
    //   { item: 'Admiral Flankson' },
    //   { item: 'pvt. centeras' },
    //   { item: 'pvt. leeft' },
    //   { item: 'pvt. rijks' }
    // ]
    this.studentDetailsList.forEach(element => {
      if(element.session == 'Platinum'){
      const obj={
        'item':element.name,
       }
       this.sessionPlatinum.push(obj);
      }
    });
    this.studentDetailsList.forEach(element => {
      if(element.session == 'Gold'){
      const obj={
        'item':element.name,
       }
       this.sessionGold.push(obj);
      }
    });
    this.studentDetailsList.forEach(element => {
      if(element.session == 'Sliver'){
      const obj={
        'item':element.name,
       }
       this.sessionSliver.push(obj);
      }
    });
  }
  fleet = [
    {
      item:'Platinum',
      children:this.sessionPlatinum
    },
    {
      item:'Gold',
      children: this.sessionGold
    },
    {
      item: 'Sliver',
      children: this.sessionSliver
    }
  ]


  drop(event: CdkDragDrop<{}[]>){
    if(event.previousContainer == event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    
    console.log(this.fleet);
  }

}
