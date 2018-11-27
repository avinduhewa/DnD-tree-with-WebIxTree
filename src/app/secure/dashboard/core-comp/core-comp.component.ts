import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-comp',
  templateUrl: './core-comp.component.html',
  styleUrls: ['./core-comp.component.scss']
})
export class CoreCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('core cmp works!');
    
  }

}
