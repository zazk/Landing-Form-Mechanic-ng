import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {
	constructor(private http: HttpClient) {}

	onSubmitForm(form) {
		const event = form.value;
		console.log('submit Form now', event);
		console.log('Form Valid?', form.valid);
		// Replace data to ecode for PHP way. Note: PHP sucks!
		const data = JSON.stringify(event);
		const params = 'data=' + data;
		if (form.valid) {
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
						form.reset();
						alert(
							'Gracias por Registrarse, Enviaremos un correo de confirmación'
						);
					},
					(error) => {
						console.log('Error:=======', error);
					}
				);
		} else {
			return alert('Por favor llenar todos los datos correctamente');
		}
		return false;
	}

	ngOnInit() {}
}
