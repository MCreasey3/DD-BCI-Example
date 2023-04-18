import { Component, OnInit } from '@angular/core';
import myClass from './../myClass'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
let x = new myClass();

    console.log( x.hello("World"))

  }
  
  title = 'drowsyDriver';
}
