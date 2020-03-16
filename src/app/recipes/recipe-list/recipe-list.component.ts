import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Name Recipe', ' Ddescription dada', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fa582af22-44f8-42b3-a3da-2159a60124c2.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgQXViZXJnaW5lIFN0dWRpby9TdWNyw6kgc2Fsw6kgLyBDdWlzaW5lIEFjdHVlbGxl/burger-au-cheddar.jpeg' )
    ,new Recipe('Name Recipe', ' Ddescription dada', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fa582af22-44f8-42b3-a3da-2159a60124c2.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgQXViZXJnaW5lIFN0dWRpby9TdWNyw6kgc2Fsw6kgLyBDdWlzaW5lIEFjdHVlbGxl/burger-au-cheddar.jpeg' )

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
