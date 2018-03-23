import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  
 
  wordsList: any[] = [];
  cols: any[];
  images: any[];
  
  constructor(private service: AuthService) { 
    this.images = [];
    this.images.push({source:'assets/images/1.jpg', thumbnail: 'assets/thumbnails/1.jpg', title:'An amazing note maker'});
    this.images.push({source:'assets/images/2.jpg', thumbnail: 'assets/thumbnails/2.jpg', title:'Equally amazing player'});
    this.images.push({source:'assets/images/3.jpg', thumbnail: 'assets/thumbnails/3.jpg', title:'And one of the best guide'});
  }

  ngOnInit() {
    this.getSampleWords();
    this.cols = [
      { field: 'word', header: 'Word' },
      { field: 'meaning', header: 'Meaning' },
      { field: 'category', header: 'Category' },
  ];
  }

  getSampleWords() {
        this.service.getSampleWords()
        .subscribe((data: any) => {
            if (data.status == 'success') {
                data.wordsList.forEach((word: any, index: any) => {
                    this.wordsList.push(word);
                });
            }
            console.log(this.wordsList);
        },
        (err: any) => { });
  } 
}
