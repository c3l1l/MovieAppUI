import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DirectorDropList } from '../../models/director-drop-menu';
import { MovieUpdateModel } from '../../models/movie-update-model';
import { DirectorService } from '../../services/director.service';
import { ErrorService } from '../../services/error.service';
import { MovieService } from '../../services/movie.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent {
  id:number|undefined;
  movieUpdateModel:MovieUpdateModel=new MovieUpdateModel();
  directorDropList:DirectorDropList[]=[];
  
constructor(private movieService:MovieService,private directorService:DirectorService,private router:Router,private activatedRoute:ActivatedRoute,private errorService:ErrorService,private toastr:ToastrService){

}

ngOnInit(){
  
  this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
  this.getMovie(this.id);
 
}

getMovie(id:number){
 this.movieService.get(id).subscribe((res:any)=>{
  this.movieUpdateModel=res.data;
 
 })
 this.getDirectors();
}
getDirectors(){
  this.directorService.getAll().subscribe((res:any)=>{
    this.directorDropList=res.data;
  })
}
directorChange(value: any) {
  //console.log(value);
  this.movieUpdateModel.directorId=value;
}
update(form:NgForm){
 this.movieService.update(this.movieUpdateModel).subscribe((res:any)=>{
   
    //this.toastr.success("Updated successful.");
    this.toastr.success('Updated Successfull', 'Update !');
    this.router.navigateByUrl("admin/movies");
  
 },(err)=>{
  this.errorService.errorHandler(err);
 })
  

}

}
