import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../topics/TopicService";
import {Topic} from "../topics/Topic";

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {
  @ViewChild('f') userCreateForm: NgForm;

  // id: string;
  name: string;
  eid: number;
  topic: Topic;
  userForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eid = params['eid'];
    });

    this.userForm = new FormGroup({
      eid: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')])
    });

    if (this.eid) { // edit form
      this.topicService.findById(this.eid).subscribe(
        topic => {
          this.eid = topic.eid;
          this.userForm.patchValue({
            eid: topic.eid,
            name: topic.name,
            age: topic.age,
            email: topic.email
          });
        }, error => {
          console.log(error);
        }
      );
    }
  }
  onSubmit() {
    if (this.userForm.valid) {
      if (this.eid) {
        let topic: Topic = new Topic(
          this.userForm.controls['eid'].value,
          this.userForm.controls['name'].value,
          this.userForm.controls['age'].value,
          this.userForm.controls['email'].value);

        this.topicService.updateTopic(topic).subscribe();
        this.router.navigate(['/topics']);
      } else {
        let topic: Topic = new Topic(
          this.userForm.controls['eid'].value,
          this.userForm.controls['name'].value,
          this.userForm.controls['age'].value,
          this.userForm.controls['email'].value);

        this.topicService.saveTopic(topic).subscribe();
        this.router.navigate(['/topics']);
      }
      this.userForm.reset();
      this.router.navigate(['/topics']);
    }
  }

  redirectTopicPage() {
    this.router.navigate(['/topics']);
  }
}
