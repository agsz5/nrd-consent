import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {
  consentGiven!: boolean;
  nextClicked = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const consentGiven = sessionStorage.getItem('consentGiven');
    if (consentGiven === 'true') {
      this.consentGiven = true;
    } else {
      this.consentGiven = false;
    }
    sessionStorage.setItem('nextClicked', 'false');
  }

  onConsentChanged() {
    sessionStorage.setItem('consentGiven', this.consentGiven.toString());
  }

  onNext() {
    sessionStorage.setItem('nextClicked', 'true');
    this.router.navigateByUrl('/next');
  }

}
