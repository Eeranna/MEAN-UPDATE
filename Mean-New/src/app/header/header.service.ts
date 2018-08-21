import { Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Topic} from '../topics/Topic';


@Injectable()
export class HeaderService {
  // years = ['2013','2014','2015','2016','2017','2018'];
  // countries = ['India','Srilanka','Bangladesh','Pakistan','China','Nepal','Afgnistan'];
  private topicApiUrl = 'http://localhost:8080/user/all';

  constructor(private http: Http) { }

 /* getYear() {
    return this.years;
  }*/

  /*getCountry() {
    return this.countries;
  }*/


  findAll(): Observable<Topic[]>  {
    return this.http.get(this.topicApiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
