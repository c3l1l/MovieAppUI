import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genrePipe'
})
export class GenrePipe implements PipeTransform {

  transform(value: any[], filterText: string): any {
    if(filterText=="" || filterText==null){
      return value;
    }
return value.filter(p=>{
  const name=p.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
  return (name)
});
  }

}
