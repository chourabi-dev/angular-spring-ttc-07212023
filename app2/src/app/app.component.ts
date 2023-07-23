import { Component } from '@angular/core';
import { Article } from './models/article';
import { SideMenu } from './models/sideMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';


  articles:Article[] = [
    { title:'Angular spring', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:150 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    { title:'React JS VS Vue JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae at ipsa saepe sed sunt provident aperiam facilis hic voluptas assumenda esse, tempore nemo minima dolore debitis ab rerum? Excepturi?', likes:18 },
    
  ]



  menu:SideMenu[] = [
    { title:'Acceuil' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    { title:'Profile' },
    
  ]


}
