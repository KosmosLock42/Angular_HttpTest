import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';
import { repos} from '../models/repos';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  userName!:string;

  repos!:repos[];

  constructor(private http:HubService) { }

public getRepos(){
  this.http.getRepos(this.userName)
  .subscribe(
    (data)=> { console.log('response received')
  this.repos = data;
  }
  )
}

  ngOnInit(): void {
  }

}
