import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentComponent } from './consent/consent.component';
import { NextPageComponent } from './next-page/next-page.component';
import { ConsentGuard } from './consent.guard';

const routes: Routes = [
  { path: '', component: ConsentComponent },
  { path: 'next', component: NextPageComponent, canActivate: [ConsentGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }