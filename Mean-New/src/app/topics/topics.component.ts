import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TopicService} from './TopicService';
import {Topic} from './Topic';
import {MatPaginator, MatTableDataSource} from "@angular/material";


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

    topics: Topic[];

    constructor(private router: Router,
                private topicService: TopicService) { }

    ngOnInit() {
        this.getAllTopics();
        this.router.navigate(['topics']);
    }

    getAllTopics() {
        this.topicService.findAll().subscribe(
            topics => {
                this.topics = topics;
            },
            err => {
                console.log(err);
            }
        );
    }

   /* redirectNewUserPage() {
        this.router.navigate(['/create']);
    }*/
    editTopic(topic: Topic) {
        if (topic) {
            this.router.navigate(['/topic/edit', topic.eid]);
        }
    }


    deleteTopic(topic: Topic) {
        if (topic) {
            this.topicService.deleteTopicById(topic.eid).subscribe(
                res => {
                    this.getAllTopics();
                    this.router.navigate(['/topics']);
                    console.log('done');
                }
            );
        }
    }

}
