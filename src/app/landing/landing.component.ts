import { HttpClient, HttpHeaders } from '@angular/common/http';
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

		// Replace data to ecode for PHP way. Note: PHP sucks!
		const data = JSON.stringify(event);
		const params = 'data=' + data;

		this.http
			.post('http://w.areminds.com/api/index.php', params, {
				headers: new HttpHeaders().set(
					'Content-Type',
					'application/x-www-form-urlencoded'
				)
			})
			.subscribe(
				(res) => {
					console.log('Response:', res);
				},
				(error) => {
					console.log('Error:=======', error);
				}
			);
		return false;
	}

	ngOnInit() {}
}
