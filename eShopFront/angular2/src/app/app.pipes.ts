import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name:'descPipe'
})
export class DescriptionPipe implements PipeTransform{

  private limit:number = 50;

  transform(value: string): string {
    return value.length > this.limit ? value.substr(0, this.limit).concat('...') : value;
  }

}
