import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableComponent } from './reusable/reusable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// kendo ui module 
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IntlModule } from "@progress/kendo-angular-intl";
 import 'hammerjs';
 
@NgModule({
  declarations: [AppComponent, DynamicFormsComponent, ReusableComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(
    //   [
    //     {
    //       path: 'login',
    //       loadChildren: () =>
    //         import('login/Module').then((m) => m.RemoteEntryModule),
    //     },
    //   ],
    //   { initialNavigation: 'enabledBlocking' }
    // ),
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    IntlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
