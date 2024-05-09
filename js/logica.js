function logica() {
    var numeros=["Pedro","Juan","Diego","maria"]
    for (let i =0; i<numeros.length; i++){
        console.log(numeros[i])
    }
    for (let i = 4; i <25; i= i+4 ){
        console.log(i)
    }

}
function arrobj() {
    let Alumno= [
        {"rut": "1-9", "nombre":"Pedro", "apellido":"Perez", },
        {"rut": "2-7", "nombre":"Juan", "apellido":"Jara", },
        {"rut": "3-5", "nombre":"Diego", "apellido":"Diaz", },
        {"rut": "4-4", "nombre":"Maria", "apellido":"Martinez", },
    ]
        console.log(Alumno)
        console.log(Alumno[0].rut)
        console.log(Alumno[1].rut)
        console.log(Alumno[2].rut)
        console.log(Alumno[3].rut)

    let matriculado=[
        {"rut": "1-9",  "cod_curso": "AE600", },
        {"rut": "2-7",  "cod_curso": "BD253", },
        {"rut": "2-7",  "cod_curso": "AE600", },
        {"rut": "3-5",  "cod_curso": "BD253", },
        {"rut": "4-4",  "cod_curso": "BD253", }
    ]
        console.log(matriculado)   
        console.log(matriculado[0].rut) 
        console.log(matriculado[1].rut)
        console.log(matriculado[2].rut)
        console.log(matriculado[3].rut)
        console.log(matriculado[4].rut)      

    let curso= [
        {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
        {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}

    ]    
        console.log(curso)   
        console.log(curso[0].cod_curso) 
        console.log(curso[1].cod_curso)   

    let alumnos_matriculados= [
        {"rut": "1-9", "nombre":"Pedro", "apellido":"Perez", "cod_curso": "AE600", "descripccion":"Algoritmos y Estructura de datos"},
        {"rut": "2-7", "nombre":"Juan", "apellido":"Jara", "cod_curso": "BD253", "descripccion":"Bases de Datos"},
        {"rut": "2-7", "nombre":"Juan", "apellido":"Jara", "cod_curso": "AE600", "descripccion":"Algoritmos y Estructura de datos"},
        {"rut": "3-5", "nombre":"Diego", "apellido":"Diaz", "cod_curso": "BD253", "descripccion":"Bases de Datos"},
        {"rut": "4-4", "nombre":"Maria", "apellido":"Martinez", "cod_curso": "BD253", "descripccion":"Bases de Datos"}

    ]
        console.log(alumnos_matriculados)
        console.log(alumnos_matriculados[0].rut)
        console.log(alumnos_matriculados[1].rut)
        console.log(alumnos_matriculados[2].rut)
        console.log(alumnos_matriculados[3].rut)
        console.log(alumnos_matriculados[4].rut)

}