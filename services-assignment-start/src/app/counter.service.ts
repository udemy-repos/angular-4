import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

    activeActions = 0;
    inactiveActions = 0;

    countActive() {
        this.activeActions++;
    }

    countInactive() {
        this.inactiveActions++;
    }
}
