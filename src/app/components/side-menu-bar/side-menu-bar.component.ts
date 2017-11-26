import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SideMenuBarComponent implements OnInit {
  highlightedDiv: number;
  constructor() { }

  ngOnInit() {
  }

    //toggle class
  toggleHighlight(newValue: number) {
      if (this.highlightedDiv === newValue) {
        this.highlightedDiv = 0;
      }
      else {
        this.highlightedDiv = newValue;
      }
  }
    clickoutside(event){
      this.highlightedDiv = event;
    }
}
