import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrls: ['./custom-event.component.css']
})
export class CustomEventComponent implements OnInit {

  @Input() data: string;
  @Input() parameterData: any;

  @Output() clickEventHandle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicked(event: any) {
    this.clickEventHandle.emit(this.parameterData);
  }

}
