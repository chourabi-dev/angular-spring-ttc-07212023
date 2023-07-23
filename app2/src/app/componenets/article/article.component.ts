import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  // there is some data coming from the parent ( App.compoenent )
  @Input() title?:string; 
  @Input() content?:string; 
  @Input() likes?:number; 
  



}
