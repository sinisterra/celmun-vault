var comisiones = ['agp-a','agp-b','unicef','ocde','sc']
var paises = {
	'agp' : [
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},
		{"codigo":'123',"nombre":'123'},

	]
}

paises.unicef = paises.agp;
paises.ocde = paises.agp;
paises.sc = paises.agp;

for(i in comisiones){
	var tabla = $('#paises-'+comisiones[i])

	var paises_agregar = paises[comisiones[i]];
	if(comisiones[i] == 'agp-a' || comisiones[i] == 'agp-b')
		paises_agregar = paises['agp']

	for(e in paises_agregar){
		//console.log(paises_agregar[''])
		tabla.append('<tr><td><img class="banderita" src="img/banderas/'+paises_agregar[e]['codigo']+'.png"/> '+paises_agregar[e]['nombre']+'</td></tr>');
	}
}
