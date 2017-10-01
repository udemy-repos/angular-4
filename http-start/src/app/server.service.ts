import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    saveServers(servers: any[]) {
        return this.http
            .put('https://udemy-ng-project-433ac.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http
            .get('https://udemy-ng-project-433ac.firebaseio.com/data.json')
            .map((response: Response) => {
                return response.json();
            });
    }
}
