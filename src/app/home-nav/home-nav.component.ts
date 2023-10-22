
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home-nav',
//   templateUrl: './home-nav.component.html',
//   styleUrls: ['./home-nav.component.css']
// })
// export class HomeNavComponent {

//   showSearch: boolean = false;

//   toggleSearch() {
//     this.showSearch = !this.showSearch;
//     console.log("search div")
//   }
 
  
// w3_open() {
//     document.getElementById("mySidebar").style.width = "100%";
//     document.getElementById("mySidebar").style.display = "block";
//   }
  
//    w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//   }

// }

import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent {

  showSearch: boolean = false;
  hideMenu : boolean=true

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleSearch() {
    this.showSearch = !this.showSearch;
    console.log("search div");
  }
  
  open_menu_tab() {
    this.hideMenu=false
    const sidebar = this.el.nativeElement.querySelector('#mySidebar');
    this.renderer.setStyle(sidebar, 'width', '100%');
    this.renderer.setStyle(sidebar, 'display', 'block');
  }
  
  close() {
    const sidebar = this.el.nativeElement.querySelector('#mySidebar');
    this.renderer.setStyle(sidebar, 'display', 'none');
  }

}

