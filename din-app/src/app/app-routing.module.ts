import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';
import { Page2Component } from './modules/page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'page2',
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
