import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
	title = 'app';
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
}
