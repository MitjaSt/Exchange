import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customCurrency'
})
export class CurrencyPipe implements PipeTransform {
    // Transform number to currency
    transform(value: number, code='EUR') {
        return value.toFixed(2).toLocaleString()+' '+code;
    }
}