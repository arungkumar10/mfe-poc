import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'forms',
    component: DynamicFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
