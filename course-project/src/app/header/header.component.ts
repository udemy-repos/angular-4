import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private dataStorage: DataStorageService,
        private authService: AuthService
    ) { }

    onSaveData() {
        this.dataStorage.saveRecipes()
            .subscribe(
                (response) => console.log(response)
            );
    }

    onFetchData() {
        this.dataStorage.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
