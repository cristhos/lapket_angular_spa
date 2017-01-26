import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}from '@angular/router';
import	{	Injectable	}	from	'@angular/core';
import	{	UserService	}	from	'./user.service';


@Injectable()
export	class	CanActivateViaAuthGuard	implements	CanActivate{
		constructor(private	userService:	UserService, private router: Router)	{}

		// La méthode du Guard : détermine si l'utilisateur peut se connecter ou non !
		canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		    let url: string = state.url;
		    return this.checkLogin(url);
		}
		// Méthode d'aide pour le Guard, qui interroge notre service.
		checkLogin(url: string): boolean {
			if (localStorage.getItem("access_token")) { return true; }
			this.userService.redirectUrl = url;
			this.router.navigate(['/login']);
			return false;
	}

}
