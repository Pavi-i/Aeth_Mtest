import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeSubFooterComponent } from './home-sub-footer/home-sub-footer.component';
import { SectionCareerComponent } from './section-career/section-career.component';
import { SectionCardsComponent } from './section-cards/section-cards.component';
import { SectionWorkLifeBalanceComponent } from './section-work-life-balance/section-work-life-balance.component';
import { SectionItServiceComponent } from './section-it-service/section-it-service.component';
import { SectionAgileDevopsComponent } from './section-agile-devops/section-agile-devops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeNavComponent,
    HomeFooterComponent,
    HomeSubFooterComponent,
    SectionCareerComponent,
    SectionCardsComponent,
    SectionWorkLifeBalanceComponent,
    SectionItServiceComponent,
    SectionAgileDevopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
