import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Output() alertDismissed = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onAlertDismiss() {
  //  console.log("hello");
   this.alertDismissed.emit();
  }

}