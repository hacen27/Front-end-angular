import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register.service';
import {Observable} from "rxjs";
import { UtilService } from 'src/app/services/util.service';
import { IUserRegister } from 'src/app/models/iuser-register';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit ,AfterViewInit{
    form: FormGroup = <FormGroup>{};
    loading = false;
    submitted = false;
    showError = false;

    constructor(
        private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
        // private router: Router,
        private utilService : UtilService,
        private registerService: RegisterService,
        // private alertService: AlertService
    ) { }
  ngAfterViewInit(): void {
  }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            telephone:['',Validators.required],
            email:['',Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['',[Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    message(message : String) {
      window.alert(message);
    }
  
    onNotify() {
      window.alert('You will be notified when the you are registred');
    }
    // if(this.isFormvalid){
    //   this.registerService.register(userObj)
    //   .subscribe(registerResp => {
    //     console.log("registerResp : ")
    //     console.log(registerResp)
    //     // / registerResp.key maybee is not definitive 
    //     // try some thing link registerResp.status ==200 or some thing like that 
    //     if(registerResp.username) {
    //       this.message("l'utilisateur est ajouté avec success!");
    //       this.utilService.navigateTo('login');
    //       // this.localDbService.token = "Token " + loginResp.key;
    //     } else {
    //       console.log(" else ========== ")
    //       // this.showError = true;
    //     }
    //   });
    // }else{
    //   this.message("un erreur detecté,les donnees ne sont pas valide ou  !");
    // }

    onSubmit() {
        this.submitted = true;
        const userObj: IUserRegister = {
          firstName: this.form.value.firstName,
          lastName: this.form.value.lastName,
          username: this.form.value.username,
          phone: this.form.value.telephone,
          email: this.form.value.email,
          password: this.form.value.password,
          isAdmin: false
          // confirmPassword: this.form.value.confirmPassword
        }
        const confirmPassword = this.form.value.confirmPassword
        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
          this.message("un erreur detecté,les donnees ne sont pas valide!");
            return;
        }

        // if (!confirmPassword == this.form.value.password) {
        //   this.message("les mots de pass ne sont pas meme!");
        //   return;
        // }

        console.log(userObj);

        this.loading = true;
        this.registerService.register(userObj)
        .subscribe(registerResp => {
          console.log(registerResp)
          // / registerResp.key maybee is not definitive 
          // try some thing link registerResp.status ==200 or some thing like that 
        // if(registerResp.username) {
          this.utilService.navigateTo('login');
          // this.localDbService.token = "Token " + loginResp.key;
        // } else {
        //   console.log(" else ========== ")
        //   // this.showError = true;
        // }
      });

      this.utilService.navigateTo('login');
    }
}
