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

  fileImage: any;
  movieId:number=0;
  movieDetailModel:MovieDetailModel=new MovieDetailModel();
  statusCode:number=0;
  isExistMovieDetail:boolean=false;

  constructor(private movieDetailService:MovieDetailService,private router:Router,private toastr:ToastrService,private errorService:ErrorService,private activatedRouter:ActivatedRoute){
    this.movieDetailModel.id=0;
  }
  ngOnInit(){
    this.movieId=Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.isExist();
    this.getByMovieId(this.movieId);
  }
  getByMovieId(id:number){
    this.movieDetailService.getByMovieId(id).subscribe((res:any)=>{
      this.movieDetailModel=res.data;
    },(err)=>{
      this.statusCode=err.status;

      //this.errorService.errorHandler(err);
    })
  }
  getById(){

  }
  update(form:NgForm){
      this.movieDetailService.update(this.movieDetailModel).subscribe((res:any)=>{
        this.toastr.success("Movie Detail successfully updated.","Movie Detail Update");
      },(err)=>{
        this.errorService.errorHandler(err);
      })
  }

  getImage(event: any) {
    this.fileImage = event.target.files[0];
    }
  uploadImage() {
    let formData = new FormData();
    formData.append("movieId",this.movieId.toString());
    formData.append("poster",this.fileImage)
    this.movieDetailService.addPosterImage(formData).subscribe((res: any) => {
      this.toastr.success("success","success");
      this.getByMovieId(this.movieId);
    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
  updateImage() {
    let formData = new FormData();
    formData.append("id",String(this.movieDetailModel.id));
    formData.append("posterPath",String(this.movieDetailModel.posterPath));
    formData.append("movieId",this.movieId.toString());
    formData.append("poster",this.fileImage)
    this.movieDetailService.updatePosterImage(formData).subscribe((res: any) => {
      this.toastr.success("success","success");
      this.getByMovieId(this.movieId);
    }, (err) => {
      this.errorService.errorHandler(err);
    })
  }
  isExist(){
    this.movieDetailService.getByMovieId(this.movieId).subscribe((res:any)=>{
        if(res.data==null){
          this.isExistMovieDetail=false;
        }
        else{
          this.isExistMovieDetail=true;
        }
    })
  }
}
