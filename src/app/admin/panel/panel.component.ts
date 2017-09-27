import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-panel',
	template: `
	<h1>Panel</h1>
	<table class="table">
	<thead>
		<tr>
			<th><abbr title="Position">Nombres</abbr></th>
			<th>Apellido Paterno</th>
			<th><abbr title="Played">Apellido Materno</abbr></th>
			<th><abbr title="Won">Celular</abbr></th>
			<th><abbr title="Drawn">Email</abbr></th>
			<th><abbr title="Lost">Fecha de Nacimiento</abbr></th>
			<th><abbr title="Goals for">Teléfono Fijo</abbr></th>
			<th><abbr title="Goals against">Distrito donde vives</abbr></th>
			<th><abbr title="Goal difference">Educación</abbr></th>
			<th><abbr title="Points">Distrito donde trabajas</abbr></th>
			<th>Nombre del taller</th>
			<th>Dirección del taller</th>
			<th>Cargo en el taller</th>
			<th>Funciones que realiza en el taller</th>


		</tr>
	</thead> 
	<tbody>
		<tr>
			<th>1</th>
			<td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
			</td>
			<td>38</td>
			<td>23</td>
			<td>12</td>
			<td>3</td>
			<td>68</td>
			<td>36</td>
			<td>+32</td>
			<td>81</td>
			<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
		</tr>
		<tr>
			<th>1</th>
			<td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
			</td>
			<td>38</td>
			<td>23</td>
			<td>12</td>
			<td>3</td>
			<td>68</td>
			<td>36</td>
			<td>+32</td>
			<td>81</td>
			<td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
		</tr>
	</tbody>
</table>
	`,
	styles: [
		`
		h1{
			font-size: 30px;
		}

`

	]
})
export class PanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
