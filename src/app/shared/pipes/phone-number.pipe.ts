import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    const phone = value.replace(/[^\d]/g, '');

    return phone.length === 10 ?
      phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') :
      '';
  }
}
