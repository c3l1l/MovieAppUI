import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorPipe'
})
export class ActorPipe implements PipeTransform {

  transform(value: any[], filterText: string): any {
    if(filterText=="" || filterText==null){
      return value;
    }
return value.filter(p=>{
  const firstName=p.firstName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
  return (firstName);
});
  }

}
