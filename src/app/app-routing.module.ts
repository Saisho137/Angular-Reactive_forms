import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsWihoutAtomsComponent } from './components/forms-wihout-atoms/forms-wihout-atoms.component';

const routes: Routes = [
  {path: '', redirectTo: '/reactive-forms-vanilla', pathMatch: 'full'},
  {path: 'reactive-forms-vanilla', component: FormsWihoutAtomsComponent, pathMatch: 'full', title: 'Reactive Forms'},
  {path: 'reactive-forms-atomic-design', component: FormsWihoutAtomsComponent, pathMatch: 'full',title: 'Reactive Forms'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
