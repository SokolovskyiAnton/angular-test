import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {NotificationsService} from "../../../../services/notifications.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
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
      await this.authService.signup(this.form.value)
      await this.router.navigate(["/auth/login"])
    } catch (e) {
      this.notifyService.showNotify('This email address is already registered !')
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
