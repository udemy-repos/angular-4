import { Input, Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appPositive]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PositiveValidatorDirective,
        multi: true
    }]
})
export class PositiveValidatorDirective implements Validator {
    validate(c: AbstractControl): { [key: string]: any; } {
        if (+c.value <= 0) {
            return { valueNotPositive: true };
        }
        return null;
    }
}
