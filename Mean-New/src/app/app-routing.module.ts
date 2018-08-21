import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {TopicsComponent} from './topics/topics.component';
import {TopicCreateComponent} from './topic-create/topic-create.component';
import {AuthGuard} from './auth/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'topics', component: TopicsComponent },
  { path: 'newresource', component: TopicCreateComponent },
  { path: 'topic/edit/:eid', component: TopicCreateComponent },
  { path: 'dashboard', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
