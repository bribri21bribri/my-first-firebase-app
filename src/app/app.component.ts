import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '@core/service/base-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items$: Observable<any[]>;
  item$: Observable<any>;
  constructor(private _http: BaseHttpService) {
    this.items$ = this._http.list('numbers', {
      queryFn: (ref) => ref.orderByChild('value').endAt(3),
      isKey: true
    });
    // this.item$ = this._http.object('menus/information');
  }
}
