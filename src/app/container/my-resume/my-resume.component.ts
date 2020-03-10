import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {
  router: any;
  constructor() { 
  }
  name = 'Passakon Kuljiratanachote';
  position  = 'Programmer,Tester And System analysis'

  ngOnInit(): void {
  }

}
