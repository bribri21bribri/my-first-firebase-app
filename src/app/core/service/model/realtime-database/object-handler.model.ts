import { AngularFireDatabase, QueryFn, AngularFireObject } from '@angular/fire/database';
import { map, tap } from 'rxjs/operators';
export class ObjectHandler {
  url: string;
  _fireObject: AngularFireObject<{}>;
  constructor(private _db: AngularFireDatabase, private _url) {
    this.url = _url;
    this._fireObject = this._db.object(_url);
  }
}
