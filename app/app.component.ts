import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.html',
})
export class AppComponent {

    options = {
        position: ["top", "left"],
        timeOut: 1000,
    }
}