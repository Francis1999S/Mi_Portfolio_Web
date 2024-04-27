import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPAComponent } from './spa/spa.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { loginGuard } from './guards/login.guard';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: SPAComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Proyectos', component: ProjectsComponent},
  { path: 'apPTkA2qDdLw5T2uKl0eDfW60AtxylvDdWI6QrWBuG7IFFyYVB0L4AtsPKZyEPHk', component: AdminComponent, canActivate: [loginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
