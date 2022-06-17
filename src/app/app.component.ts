import { Component, OnInit, OnChanges, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChages, AfterViewInit {
  data = [ 1, 2 , 3];
  @ViewChildren('demo') demo;
  display = true;

  ngOnInit() {
    console.log('1. app component init');
    console.log(this.demo)
  }

  ngOnChanges() {
    // console.log('2. app component onChanges');
  }

  ngAfterViewInit() {
    console.log('2. app component view init');
    console.log(this.demo);
  }
}
