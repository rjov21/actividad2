const usuarios =[{
    nombre: "Robinson", 
    ID: 1,
    Correo: "rordonez@cuc.edu.co",
    Cedula: 123,
    Sexo: "Masculino"
},
{
    nombre: "Robinson", 
    ID: 2,
    Correo: "rordonez@cuc.edu.co",
    Cedula: 123,
    Sexo: "Masculino"  
},
{
    nombre: "Robinson", 
    ID: 3,
    Correo: "rordonez@cuc.edu.co",
    Cedula: 123,
    Sexo: "Masculino"
}]
const tabla = document.getElementById('usuarios-tabla')
const formulario = document.getElementById('formulario');

function cargar() {
    // console.log(usuarios)
    for(let item of usuarios){
        tabla.innerHTML += `
        <tr>
         <td>${item.nombre}</td>   
         <td>${item.ID}</td>
         <td>${item.Correo}</td>
         <td>${item.Cedula}</td>
         <td>${item.Sexo}</td>  
        </tr>
        `
    }
}

formulario.addEventListener("submit", function(event){
    // console.log(usuarios[0].ID);
    event.preventDefault()
    let DatosFormularios = new FormData(formulario);
    // console.log(DatosFormularios.get('user_id'));
    for(let item of usuarios){
        if (parseInt(DatosFormularios.get('user_id')) == item.ID){
            var existe = true
            break;
        }
    }
    if (existe == true) {
        alert('ID existente')
    }else{
        usuarios.push({
            nombre: DatosFormularios.get('user_name'),
            ID: DatosFormularios.get('user_id'),
            Correo: DatosFormularios.get('user_mail'),
            Cedula: DatosFormularios.get('user_cedula'),
            Sexo: DatosFormularios.get('hm')
        })
        cargar()
    }
    
})