import { Component, Input } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input()
  diameter:number|null=null

  @Input()
  label:string|null=null;

  @Input()
  couleur:string='warn'
  isLoad=true;
  constructor(public loading:LoadingService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe((isLoad:boolean)=>{
      this.isLoad=isLoad;
    })
  }

}
