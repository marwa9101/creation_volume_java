import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

import { appRoutes } from './routes';
import { AgregatComponent } from './agregat/agregat.component';
import { AgregatService } from './shared/agregat.service';

import { SvmService } from './shared/svm.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    AgregatComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [AgregatService, SvmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
