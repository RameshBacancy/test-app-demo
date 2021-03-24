import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-demo';
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // this.isVideoDetailPage = !!event.url.split('/').includes('video-detail');
      // this.isCustomerVideoUpload = !!event.url.split('/').includes('upload-video') || !!event.url.split('/').includes('edit-video');
      // if (this.isVideoDetailPage) {
      //   this.videoTitle = this.acRouter.firstChild.snapshot.paramMap.get('video-title');
      // }
      // this.searchInput = '';
      console.log('object :>> ', event.url);
    });
  }
}
