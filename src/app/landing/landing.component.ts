import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {
	constructor(private http: HttpClient) {}

	onSubmitForm(event) {
		console.log('submit Form now', event);
		this.http
			.get('http://w.areminds.com/api.landing.php')
			.subscribe((res) => {
				console.log('Response:', res);
			});
		return false;
	}

	ngOnInit() {}
}
