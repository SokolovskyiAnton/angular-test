import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./pages/login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./pages/register/register.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
})
export class AuthModule { }
