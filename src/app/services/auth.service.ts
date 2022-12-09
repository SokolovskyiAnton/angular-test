import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {LoginData} from "./dto/login.dto";
import {SignUpData} from "./dto/signup.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
  ) {}

  login({email, password}: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signup({email, password}: SignUpData) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
    await this.router.navigate(['/auth/login'])
  }
}
