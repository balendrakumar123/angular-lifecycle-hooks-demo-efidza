import { Component, OnInit, OnChanges, Input,AfterViewInit,AfterContentInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {
  @Input() name: string;
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    console.log('4. demo init');
    this.subscription = interval(1000).subscribe(console.log);
  }

  ngOnChanges() {
    console.log('3. demo change');
  }

  ngAfterViewInit() {
    console.log('5. demo view init')
  }

  ngAfterContentInit() {
    console.log('6. demo content init');
  }

  ngOnDestroy() {
    console.log('7. demo destroy');
    this.subscription.unsubscribe();
  }
}