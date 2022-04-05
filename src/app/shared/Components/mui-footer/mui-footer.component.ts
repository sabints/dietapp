import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mui-footer',
  templateUrl: './mui-footer.component.html',
  styleUrls: ['./mui-footer.component.scss']
})
export class MuiFooterComponent implements OnInit {

  public istActive: string = "home";
  constructor(private actRoute: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => { 
      if (val instanceof NavigationEnd) { 
        this.istActive = val.url == "/" ? "home" : val.url.replace('/', '');
      } 
    })
  }

  ngOnInit(): void { 
  }

}
