
const express = require('express');
const cors = require('cors');
const {dbConection}=require('../database/config')

const PORT= process.env.PORT


class Server {

    // dentro no van las propiedades porque se colocaan en el constructor 
    // el contructir es un metodo donde se definen las propiedades de la clase 
   constructor(){
    this.app = express()
    this.usuarioPath='/api/user';
    this.materiaPath='/api/materias';
    this.semestrePath='/api/semestres';
    this.asignarMat='/api/asignarMat';
    this.asignarEstudiante='/api/asignarEstudiante';
    this.estudianteGet='/api/estudianteGet';

    // base de datos 
    this.conectionDB();

    //middleware
    this.middleware();

    //lecturra y parseo del body porque
    
    this.app.use(express.json());

    // rutas 
    this.routes();

       }

    async conectionDB(){
        await dbConection()
   }

   middleware(){
       this.app.use(cors());
       this.app.use(express.static('public'));
   }

   routes (){
       this.app.use(this.usuarioPath, require('../routes/user'));
       this.app.use(this.materiaPath, require('../routes/materia'));
       this.app.use(this.semestrePath, require('../routes/semestre'));
       this.app.use(this.asignarMat, require('../routes/semestre'));
       this.app.use(this.asignarEstudiante, require('../routes/semestre'));
       this.app.use(this.estudianteGet, require('../routes/user'));
   }

  

   listen(){
     this.app.listen(PORT, () => {
     console.log('listening on port'+ ' '+ PORT);
    });
   }
}


module.exports=Server;