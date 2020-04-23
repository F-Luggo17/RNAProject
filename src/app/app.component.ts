import { Component, OnInit, NgModule, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ColorRNA';
  color = 'rgb(220,245,0)';
  textColor = 'black';
  toggle = false;

  constructor() { }

  ngOnInit( ) {

  }






}
