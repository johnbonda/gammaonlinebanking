import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-session',
  templateUrl: './admin-session.component.html',
  styleUrls: ['./admin-session.component.css']
})
export class AdminSessionComponent implements OnInit {

  public contentArea:string;
  constructor() { 
    this.contentArea = "adminHomePage";
  }

  ngOnInit() {
  }

}
