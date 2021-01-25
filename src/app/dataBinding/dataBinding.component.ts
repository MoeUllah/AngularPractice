import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataBinding',
  templateUrl: './dataBinding.component.html',
  styleUrls: ['./dataBinding.component.css']
})
export class dataBindingComponent implements OnInit {

  name: string = "Shakat";
  status: string = "offline"; 
  allowClickable: boolean = false;
  clickedState: string = "Button wasn't clicked";

  constructor() { 
    setTimeout(() => {
      this.allowClickable = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }
  onClicked() { 
    this.clickedState = "Button was clicked";
  }

}
