import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent implements OnInit {
  currentColor: string = '';
  defaultColor: string = 'grey'; 

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const colorParam = this.route.snapshot.params['color'];

    if (colorParam) {
      this.currentColor = colorParam;
    } else {
      this.currentColor = this.defaultColor;
    }
  }

  resetColor() {
    this.currentColor = this.defaultColor;
  }
}
