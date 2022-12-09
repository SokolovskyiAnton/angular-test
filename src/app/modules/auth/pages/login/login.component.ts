import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {NotificationsService} from "../../../../services/notifications.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notifyService: NotificationsService,
    private fb: FormBuilder,
    private matSnackbar: MatSnackBar,
    private router: Router
  ) {}
  form: FormGroup
  isLoading = false
  faSpinner = faSpinner

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  async handleSubmit() {
    if (!this.form.valid) {
      return;
    }
    try {
      this.isLoading = true
      await this.authService.login(this.form.value)
      await this.router.navigate(["/"])
    } catch (e) {
      this.notifyService.showNotify('Password or email are not correct !')
    }
    finally {
      this.isLoading = false
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
