import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh01SharedModule } from 'app/shared/shared.module';
import { Jh01CoreModule } from 'app/core/core.module';
import { Jh01AppRoutingModule } from './app-routing.module';
import { Jh01HomeModule } from './home/home.module';
import { Jh01EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh01SharedModule,
    Jh01CoreModule,
    Jh01HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh01EntityModule,
    Jh01AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jh01AppModule {}
