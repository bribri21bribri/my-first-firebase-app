import { AngularFireDatabase, QueryFn, AngularFireList } from '@angular/fire/database';
import { map, tap } from 'rxjs/operators';
export interface RealTimeDbConfig {
  isKey: boolean;
  queryFn?: QueryFn;
}

export class ListHandler {
  url: string;
  _fireList: AngularFireList<{}>;
  constructor(private _db: AngularFireDatabase, private _url) {
    this.url = this._url;
    this._fireList = this._db.list(_url);
  }
  get(config: RealTimeDbConfig = {isKey: true}) {
    const req = config.queryFn ?
      this._db.list(this.url, config.queryFn) : this._fireList;
    return config.isKey ?
    req.snapshotChanges().pipe(
      tap(actions => console.log('obj: ', actions)),
      map(actions => actions.map(action => ({ key: action.key, ...action.payload.val() })))
      ) :
    req.valueChanges();
  }
}
