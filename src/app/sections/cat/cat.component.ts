import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  file: string;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.getCatImage();
  }

  getCatImage() {
    this.catService.getCatImage().subscribe(response => {
      this.file = response.file.replace("\/", "/");
    })
  }

}
