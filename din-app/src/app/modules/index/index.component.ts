import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input() title: string
  
  constructor() { }

  ngOnInit(): void {
    this.getTitle()
  }
  
  getTitle(): void{
    this.title = 'din-app'
  }

  test(): void{
    console.log("Test work!");
    
  }

}
