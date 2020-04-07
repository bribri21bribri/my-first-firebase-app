import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ListHandler } from './model/realtime-database/list-handler.model';
import { ObjectHandler } from './model/realtime-database/object-handler.model';
export interface BaseHttpConfig {
  isKey: boolean;
  queryFn?: QueryFn;
}
@Injectable()
export class BaseHttpService {

  constructor(private _db: AngularFireDatabase) { }

  object<T>(url: string) {
    return new ListHandler(this._db, url);
  }

  list<T>(url: string) {
    return new ObjectHandler(this._db, url);
  }
}
