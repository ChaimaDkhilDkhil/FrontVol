import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { VolListComponent } from './components/vol-list/vol-list.component';
import { PiloteListComponent } from './components/pilote-list/pilote-list.component';
import { AvionListComponent } from './components/avion-list/avion-list.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-employee',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'vol-list',
    component: VolListComponent,
  },
  {
    path: 'pilote-list',
    component:PiloteListComponent,
  },
  {
    path: 'avion-list',
    component:AvionListComponent,
  }
  
];
