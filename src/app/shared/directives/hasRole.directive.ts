import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit  {
  @Input() appHasRole: string;
  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    const userRoles = tokenPayload.role;

    // if no roles clear the view container ref
    if (!userRoles) {
      this.viewContainerRef.clear();
    }
    // if user has role needed then render the element
    if (userRoles === this.appHasRole) {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }
}
