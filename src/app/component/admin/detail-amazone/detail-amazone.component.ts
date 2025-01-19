import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-detail-amazone',
  templateUrl: './detail-amazone.component.html',
  styleUrls: ['./detail-amazone.component.scss']
})
export class DetailAmazoneComponent {

  id:string="";
  data:any=null
  isLoad=false;
  constructor(public router:ActivatedRoute,public admin:AdminService,public loading:LoadingService){
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.params.subscribe(params => {
      this.id=params['id'];

      this.admin.getSouscriptionsByUser(this.id).subscribe(e=>{
        this.data=e
        console.log(e)
      })
    })
  }

}
