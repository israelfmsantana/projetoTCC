import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardConfirmedCoordination, AuthGuardConfirmedManager, AuthGuardConfirmedStudent, AuthGuardConfirmedTeacher, AuthGuardDenied } from '../Auth.guard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastrModule } from 'ngx-toastr';
import "ngx-toastr/toastr";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeManagerComponent } from './homeManager/homeManager.component';
import { HomeCoordinationComponent } from './homeCoordination/homeCoordination.component';
import { homeStudentComponent } from './homeStudent/homeStudent.component';
import { homeTeacherComponent } from './homeTeacher/homeTeacher.component';
import { HeaderComponent } from './header/header.component';
import { TesteComponent } from './teste/teste.component';
import { AboutComponent } from './about/about.component';
import { createSchoolComponent } from './createSchool/createSchool.component';
import { createCoordinationComponent } from './createCoordination/createCoordination.component';
import { CreateTeachersComponent } from './createTeachers/createTeachers.component';
import { createStudentComponent } from './createStudent/createStudent.component';
import { viewCoordinationComponent } from './viewCoordination/viewCoordination.component';
import { viewSchoolComponent } from './viewSchool/viewSchool.component';
import { viewTeachersComponent } from './viewTeachers/viewTeachers.component';
import { viewStudentComponent } from './viewStudent/viewStudent.component';
import { viewDetailsComponent } from './viewDetails/viewDetails.component';
import { viewRankingComponent } from './viewRaking/viewRanking.component';
import { viewHomeStudentComponent } from './viewHomeStudent/viewHomeStudent.component';
import { viewHomeTeacherComponent } from './viewHomeTeacher/viewHomeTeacher.component';
import { SignupComponent } from './signup/signup.component';
import { viewBattleComponent } from './viewBattle/viewBattle.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'homeManager', component: HomeManagerComponent, canActivate: [AuthGuardConfirmedManager]},
  { path: 'homeCoordination', component: HomeCoordinationComponent, canActivate: [AuthGuardConfirmedCoordination]},
  { path: 'homeStudent', component: homeStudentComponent, canActivate: [AuthGuardConfirmedStudent]},
  { path: 'homeTeacher', component: homeTeacherComponent, canActivate: [AuthGuardConfirmedTeacher]},
  { path: 'about', component: AboutComponent },
  { path: 'createSchool', component: createSchoolComponent },
  { path: 'createCoordination', component: createCoordinationComponent },
  { path: 'createTeachers', component: CreateTeachersComponent },
  { path: 'createStudent', component: createStudentComponent },
  { path: 'viewCoordination', component: viewCoordinationComponent },
  { path: 'viewTeachers', component: viewTeachersComponent },
  { path: 'viewSchool', component: viewSchoolComponent },
  { path: 'viewStudent', component: viewStudentComponent },
  { path: 'viewDetails', component: viewDetailsComponent },
  { path: 'viewHomeStudent', component: viewHomeStudentComponent },
  { path: 'viewHomeTeacher', component: viewHomeTeacherComponent },
  { path: 'viewBattle', component: viewBattleComponent },
  { path: 'viewRaking', component: viewRankingComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: localStorage.getItem('lastRoute') || '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeManagerComponent,
    HomeCoordinationComponent,
    homeStudentComponent,
    homeTeacherComponent,
    TesteComponent,
    SignupComponent,
    AboutComponent,
    createSchoolComponent,
    createCoordinationComponent,
    CreateTeachersComponent,
    createStudentComponent,
    viewCoordinationComponent,
    viewSchoolComponent,
    viewTeachersComponent,
    viewStudentComponent,
    viewDetailsComponent,
    viewHomeStudentComponent,
    viewHomeTeacherComponent,
    viewBattleComponent,
    viewRankingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
