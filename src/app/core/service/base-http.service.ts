import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export interface BaseHttpConfig {
  isKey: boolean;
  queryFn?: QueryFn;
}
@Injectable()
export class BaseHttpService {

  constructor(private _db: AngularFireDatabase) { }

  object<T>(url: string, config: BaseHttpConfig = {isKey: true}): Observable<T> | Observable<any> {
    const req = this._db.object(url);
    return config.isKey ?
      req.snapshotChanges().pipe(
        tap(action => console.log('obj: ', action)),
        map(action => ({ key: action.key, ...(action.payload.val() as {}) }))
        ) :
      req.valueChanges();
  }

  list<T>(url: string, config: BaseHttpConfig = { isKey: true }): Observable<T> | Observable<any> {
    const req = this._db.list(url, config.queryFn);
    return config.isKey ?
      req.snapshotChanges()
        .pipe(
          tap(actions => console.log('list: ', actions)),
          map(actions => actions.map(action => ({ key: action.key, ...(action.payload.val() as {}) })))
          ) :
      req.valueChanges();
  }
}
