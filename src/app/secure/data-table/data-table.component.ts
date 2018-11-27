import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
declare var webix;

@Component({
  selector: 'app-datatable',
  template: ''
})
export class DataTableComponent implements OnDestroy, OnInit {
  private ui;

  constructor(root: ElementRef) {
    // webix.ui({
    //   view: 'tree'
    // });
  }

  ngOnInit() {
    // webix.ui({
    //   container: 'box',
    //   view: 'tree'
    // });
    webix.ui({
      // container: 'box',
      view: 'tree',
      drag: true,
      data: [
        {
          id: 'root', value: 'Cars', open: true, data: [
            {
              id: '1', open: true, value: 'Toyota', data: [
                { id: '1.1', value: 'Avalon' },
                { id: '1.2', value: 'Corolla' },
                {
                  id: '1.3', value: 'Camry', data: [
                    { id: '1.3.1', value: 'something' }
                  ]
                }
              ]
            },
            {
              id: '2', open: true, value: 'Skoda', data: [
                { id: '2.1', value: 'Octavia' },
                { id: '2.2', value: 'Superb' }
              ]
            }
          ]
        }
      ]
    });
  }
  ngOnDestroy() {
    // this.ui.destructor();
  }
}
