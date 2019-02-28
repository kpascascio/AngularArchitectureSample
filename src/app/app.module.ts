import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule, } from '@angular/common';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { SortableColumnComponent } from './shared/directives/table-directives/sortable-column/sortable-column.component';
import { HomeComponent } from './modules/home/home.component';
import { ChangePasswordComponent } from "./modules/auth/change-password/change-password.component";
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component'

// Import containers
import { DefaultLayoutComponent } from './core/containers';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { SharedModule } from './shared/shared.module';
import { AppformComponent } from './modules/auth/register/appform/appform.component';
import { PopoverModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: ['localhost:44311']
      }
    }),
    AccordionModule.forRoot(),
    
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SharedModule,
    PopoverModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [
    HttpClientModule
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}
