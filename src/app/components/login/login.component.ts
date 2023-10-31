import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = new User();

  constructor(private router: Router, private authService: AuthService) {}


  public async checkAuth() {
    const check: Promise<boolean> =  this.authService.checkAuth(this.user.email, this.user.password);

    if(await check){
      this.router.navigate(['/home']);
    }
    else{
      alert("Algunos de los datos es incorrecto! Intenta nuevamente!");
    }
  }


}
