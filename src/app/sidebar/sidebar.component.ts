import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  sidenavContainer: HTMLElement;

  ngOnInit() {
    this.sidenavContainer = this.elementRef.nativeElement.querySelector('#mySidenav');
  }


  openNav(event: any) {
    this.sidenavContainer.style.width = "250px";
    document.body.style.marginLeft = "250px";    
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav(event: any) {
    this.sidenavContainer.style.width = "0";
    document.body.style.marginLeft = "0";
    
    document.body.style.backgroundColor = "white";
  }

}
