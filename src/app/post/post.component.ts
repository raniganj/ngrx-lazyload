import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { myStoreState } from '../store/root-reducer';
import { PostModel, getPostListAction } from '../store/post.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postList: PostModel[] | undefined;
  constructor(private store: Store<myStoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPostListAction());
    this.store.subscribe((state) => {
      this.postList = state.postStore.postList;
    });
  }
}
