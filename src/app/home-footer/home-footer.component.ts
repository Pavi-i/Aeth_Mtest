import { Component } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent {
  selectedLanguage: string = 'en';

  onLanguageChange() {
    console.log(`Selected language: ${this.selectedLanguage}`);
    // Implement language change logic here
  }

}
