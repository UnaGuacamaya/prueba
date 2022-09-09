const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan", "pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumno.length >= 20){
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas`);
    }
    else{
        if(materia == "fisica"){
            materias = {
                fisica = alumno,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"],
        }
        else{
            if(materia == "programacion"){
                materias = {
                    fisica: materias["fisica"]
                    programacion = alumno,
                    logica: materias["logica"],
                    quimica: materias["quimica"],
            }
    }
    



}

inscribir("pepito","fisica");