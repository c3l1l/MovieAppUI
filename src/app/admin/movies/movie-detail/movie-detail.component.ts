import { Component } from '@angular/core';
import { MovieDetailModel } from '../../models/movie-detail-model';
import { MovieDetailService } from '../../services/movie-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  id?:number|undefined;
  movieDetailModel:MovieDetailModel=new MovieDetailModel();

  constructor(private movieDetailService:MovieDetailService,private router:Router,private toastr:ToastrService,private errorService:ErrorService,private activatedRouter:ActivatedRoute){
  }
  ngOnInit(){
    this.id=Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.getByMovieId(this.id);
  }
  getByMovieId(id:number){
    this.movieDetailService.getByMovieId(id).subscribe((res:any)=>{
      this.movieDetailModel=res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    })
  }

  getById(){
    this.movieDetailService.get(1).subscribe((res:any)=>{
console.log(res.data);
    })
  }

  update(form:NgForm){
      console.log(form);
      console.log(form.value.posterPath +" " + form.value.dateReleased);
      console.log(this.movieDetailModel.dateReleased + "-" + this.movieDetailModel.posterPath)
  }
}
