import { Injectable } from '@angular/core';
import {Topic} from './Topic';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TopicService {

  private topicApiUrl = 'http://localhost:8080/user/all';
  private topicApi = 'http://localhost:8080/user';

  constructor(private http: Http) {
  }

  findAll(): Observable<Topic[]>  {
    return this.http.get(this.topicApiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  findByName(name: string): Observable<Topic> {
    return this.http.get(this.topicApi + '/' + name)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  findById(eid: number): Observable<Topic> {
    return this.http.get(this.topicApi + '/' + eid)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  updateTopic(topic: Topic): Observable<Topic> {
    return this.http.put(this.topicApi, topic)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveTopic(topic: Topic): Observable<Response> {
    return this.http.post(this.topicApi, topic)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteTopicById(eid: number): Observable<Response> {
    return this.http.delete(this.topicApi + '/' + eid)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
