import { Component } from '@angular/core';
import { GenreModel } from '../models/genre-model';
import { MovieGenreModel } from '../models/movie-genre-model';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {

  genreList:GenreModel[]=[];
  genreMovieList:MovieGenreModel=new MovieGenreModel();
  genreName:string="";
  constructor(private genreService:GenreService){
  }
  ngOnInit(){
    this.getAll();
    this. getMoviesByGenreId(1);
  }
  getAll(){
    this.genreService.getAll().subscribe((res:any)=>{
      this.genreList=res.data;
      
    })
  }
  getMoviesByGenreId(id:number){
    
    this.genreService.getGenreWithMovies(id).subscribe((res:any)=>{
      this.genreMovieList=res.data;
      this.genreName=res.data.name;
      console.log(this.genreMovieList);
   })
  }
}
