import { Component } from '@angular/core';
import { GenreModel } from '../models/genre-model';
import { GenreService } from '../services/genre.service';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent {
  genresList:GenreModel[]=[];
  constructor(private genreService:GenreService,private errorService:ErrorService,private router:Router){
    
  }
  ngOnInit(){
this.get();
  }

  get(){
    this.genreService.getAll().subscribe((res:any)=>{
      this.genresList=res.data;
      console.log(res.data);
    })
  }
  
  delete(id?:number){
   this.genreService.delete(id).subscribe((res)=>{
    this.get();
   },(err)=>this.errorService.errorHandler(err))
  }
}


