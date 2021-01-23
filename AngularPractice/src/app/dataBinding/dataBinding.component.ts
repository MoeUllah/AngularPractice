import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataBinding',
  templateUrl: './dataBinding.component.html',
  styleUrls: ['./dataBinding.component.css']
})
export class dataBindingComponent implements OnInit {

  name: string="Shakat";

  constructor() { }

  ngOnInit(): void {
  }

}
