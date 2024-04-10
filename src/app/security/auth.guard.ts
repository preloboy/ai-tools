import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "../services/app-service/app.service";

// No need for all the boilerplate code
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const redirectToLogin = inject(Router).createUrlTree(['/login']);
  // const isLoggedIn = sessionStorage.getItem('token');
  const isLoggedIn = true;
  console.log("auth guard", isLoggedIn)
  return isLoggedIn ? true : redirectToLogin;
};