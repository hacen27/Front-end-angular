import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { LocalDbService } from '../../../services/local-db.service';
import { LoginService } from '../../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/app/models/ilogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup = <FormGroup>{};
//   myGroup = new FormGroup({
//     firstName: new FormControl()
// });
  showError = false;

  constructor(private loginService:LoginService,
    private localDbService: LocalDbService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    ){}
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })  
    console.warn('EERRERERERERE');
  }

    loginIn() {
      const loginObj: ILogin = {
        username: this.formLogin.value.username,
        password: this.formLogin.value.password
      }
  
      this.loginService.logIn(loginObj)
        .subscribe(loginResp => {
          console.log(loginResp)
        if(loginResp.key) {
          this.utilService.navigateTo('apropos');
          this.localDbService.token = "Token " + loginResp.key;
        } else {
          console.log(" else ========== ")
          this.showError = true;
        }
      });
    }
}
