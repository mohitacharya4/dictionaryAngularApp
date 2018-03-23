import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //create json object
  public userData = {
    login:{
    email: '',
    password: '',
    } 
  }
  isLoading:boolean = false;

  public loginForm: FormGroup;

  constructor(  
    private _fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
  }
  public ngOnInit() {
    
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.loginForm.controls['username'].valueChanges.subscribe(value => {
    });

    this.loginForm.controls['password'].valueChanges.subscribe(value => {
    });
  }
  
public login(model:any) {
console.log(model);
this.userData.login.email = model.value.username;
        this.userData.login.password = model.value.password;
        this.isLoading = true;
        this.service
          .login(this.userData)
          .subscribe((data:any) => {
            this.isLoading = false;
            if(data.status == 'success'){
                  console.log('login successful');
                  this.route();
            }else{
              //this.autherror = 'Invalid username or password';
              console.log('login failed');
            }
            },
            (err:any) =>
            {
              if(err ='401 - Unauthorized')
              // this.autherror = 'Invalid username or password';
              console.log('login failed');
              this.isLoading = false;
            }       
          )
        }

 route(){
    this.router.navigate(['/dashboard']);
 }
}
