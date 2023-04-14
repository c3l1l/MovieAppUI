import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetailService } from '../services/movie-detail.service';
import { MovieModel } from '../models/movie-model';
import { DirectorService } from '../services/director.service';
import { DirectorModel } from '../models/director-model';
import { MovieInfoModel } from 'src/app/ui/models/movie-info-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  movieList:MovieModel[]=[];
  directorList:DirectorModel[]=[];
  movieInfoList:MovieInfoModel[]=[];

constructor(private movieService:MovieService,private directorService:DirectorService,private movieDetailService:MovieDetailService){

}
ngOnInit(){
  this.getLastAddedMovies();
  this.getPopularDirectors();
  this.getAllMoviesWithActorsAndDirector();
}
getLastAddedMovies(){
    this.movieService.getAllMoviesWithActorsAndDirector().subscribe((res:any)=>{
      this.movieList=res.data;
    })
}
getPopularDirectors(){
this.directorService.getAll().subscribe((res:any)=>{
  this.directorList=res.data;
})
}

getAllMoviesWithActorsAndDirector(){
  this.movieService.getAllMoviesWithActorsAndDirector().subscribe((res:any)=>{
    this.movieInfoList=res.data
    this.getAllMoviePosterPath();
  })
}
getAllMoviePosterPath(){
  this.movieInfoList.forEach(m => {
    this.movieDetailService.getByMovieId(Number(m.id)).subscribe((res:any)=>{
       m.posterPath= res.data.posterPath;
     })
  });
}


}
