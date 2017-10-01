import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id']);
    }

}