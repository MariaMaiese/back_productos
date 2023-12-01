import express from 'express';
import cors from 'cors';
import { testConection } from '../database/config';
class Server {
    app: any;
    port: any;
    categorias_cursoPath: string;
    categorias_leadPath: string;
    modalidadesPath: string;
    promocionesPath: string;
    subcategorias_cursoPath: string;
    subcategorias_leadPath: string;
    tipos_duracionPath: string;
    valoracionesPath: string;
    cursos_productoPath: string
    leads_productoPath: string
    productosPath: string


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.categorias_cursoPath = '/categorias-curso';
        this.categorias_leadPath = '/categorias-lead';
        this.modalidadesPath = '/modalidades';
        this.promocionesPath = '/promociones';
        this.subcategorias_cursoPath = '/subcategoria-curso';
        this.subcategorias_leadPath = '/subcategoria-lead';
        this.tipos_duracionPath = '/tipos-duracion';
        this.valoracionesPath = '/valoraciones';
        this.cursos_productoPath = '/cursos';
        this.leads_productoPath = '/leads';
        this.productosPath = '/produtos';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await testConection()
    }

    middlewares() {

        // CORS 
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }


    routes() {

        this.app.use(this.categorias_cursoPath, require('../routes/categorias_curso.routes'))
        this.app.use(this.categorias_leadPath, require('../routes/categorias_lead.routes'))
        this.app.use(this.modalidadesPath, require('../routes/modalidades.routes'))
        this.app.use(this.promocionesPath, require('../routes/promociones.routes'))
        this.app.use(this.subcategorias_cursoPath, require('../routes/subcategorias_curso.routes'))
        this.app.use(this.subcategorias_leadPath, require('../routes/subcategorias_lead.routes'))
        this.app.use(this.tipos_duracionPath, require('../routes/tipo_duracion.routes'))
        this.app.use(this.valoracionesPath, require('../routes/valoraciones.routes'))
        this.app.use(this.cursos_productoPath, require('../routes/cursos_producto.routes'))
        this.app.use(this.leads_productoPath, require('../routes/leads_producto.routes'))
        this.app.use(this.productosPath, require('../routes/productos.routes'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port)
        })

    }


}


module.exports = Server;