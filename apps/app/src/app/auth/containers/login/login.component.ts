import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { routerTransition } from '@nx/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../../app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as AuthActions from '@nx/state';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  hidePassword: boolean;
  responseMessage$: Observable<string>;
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private store: Store<AppState>) {
    this.responseMessage$ = store.pipe(select(state => state.auth.message));
  }

  ngOnInit() {
    this.createForm();
  }

  onLogin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.store.dispatch(new AuthActions.Login({email: email, password: password}));
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }


}
