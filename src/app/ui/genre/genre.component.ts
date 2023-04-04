import { Component } from '@angular/core';
import { GenreModel } from '../models/genre-model';
import { MovieGenreModel } from '../models/movie-genre-model';
import { GenreService } from '../services/genre.service';
import { MovieDetailService } from '../services/movie-detail.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {

  genreList:GenreModel[]=[];
  genreMovieList:MovieGenreModel=new MovieGenreModel();
  genreName:string="";
  constructor(private genreService:GenreService,private movieDetailService:MovieDetailService){
  }
  ngOnInit(){
    this.getAll();
    this. getMoviesByGenreId(1);
    this.getAllMoviePosterPath();
  }
  getAll(){
    this.genreService.getAll().subscribe((res:any)=>{
      this.genreList=res.data;

    })
  }
  getMoviesByGenreId(id:number){

    this.genreService.getGenreWithMovies(id).subscribe((res:any)=>{
      this.genreMovieList=res.data;
      this.genreMovieList.movieList?.forEach(m => {
        this.movieDetailService.getByMovieId(Number(m.id)).subscribe((res:any)=>{
           m.posterPath= res.data.posterPath;
           console.log("x1:"+m.posterPath);
         })
      });
      this.genreName=res.data.name;
     //console.log(this.genreMovieList);
   })
  }
  getAllMoviePosterPath(){
    this.genreMovieList.movieList?.forEach(m => {
      this.movieDetailService.getByMovieId(Number(m.id)).subscribe((res:any)=>{
         m.posterPath= res.data.posterPath;
         console.log("x1:"+m.posterPath);
         console.log("x2:"+res.data.posterPath);
       })
    });
  }
}
