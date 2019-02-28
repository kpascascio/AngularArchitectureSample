import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './directives/table-directives/filter.pipe';
import { SortableTableDirective } from './directives/table-directives/sortable-table.directive';
import { SortableColumnComponent } from './directives/table-directives/sortable-column/sortable-column.component';
import { HasRoleDirective } from './directives/hasRole.directive';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../core/interceptors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    FilterPipe,
    SortableTableDirective,
    SortableColumnComponent,
    HasRoleDirective,
    PhoneNumberPipe
  ],
  exports: [
    FilterPipe,
    SortableTableDirective,
    SortableColumnComponent,
    HasRoleDirective,
    PhoneNumberPipe
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class SharedModule { }
