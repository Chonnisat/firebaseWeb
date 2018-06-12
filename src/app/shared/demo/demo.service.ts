import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private _demoList: any = [];

  constructor(
    private http: HttpClient
  ) { }

  onLoadData() {
    // return this.http.get(`${environment.API_URL}/api/v1/pic`).pipe(map((res: Response) => {
    //   return res.json();
    // }));
    return this._demoList;
  }

  onLoadDataByIdx(idx) {
    return this._demoList[idx];
  }

  onDeleteDemo(idx) {
    this._demoList.splice(idx, 1);
  }

  onAddDemo(demoObj) {
    // return this.http.post('', demoObj).pipe(map((resp) => {
    //   this._demoList.push(demoObj);
    // }));
    this._demoList.push(demoObj);
  }

  onUpdateDemo(demoObj) {
    const idx = this._demoList.findIndex(record => record.code === demoObj.code);
    if (idx > -1) {
      this._demoList[idx] = demoObj;
    }
  }
}
