<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card" v-if="!auth">
                <div class="card-header bg-dark text-white text-center">
                    Editar estudiante
                </div>
                <div class="card-body">
                    <form v-on:submit="actualizar">
                        <div class="d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="foto">
                            <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/30.User-256.png" id="fotoimg" class="img-thumbnail" alt="foto">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingresar nombre" required maxlength="50" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="apellido" id="apellido" placeholder="Ingresar apellido" required maxlength="50" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="file" v-on:change="previsualizarFoto" accept="image/png, image/jpeg, image/svg">
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-warning"><i class="fa-solid fa-refresh"></i>  Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mostraAlerta, enviarSolicitud} from '../funciones'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
    data(){
        return{
            id:'0',
        nombre:'',
        apellido:'',
        foto:'',
        url:'http://127.0.0.1:8000/api/v1/estudiantes',
        cargando:false
        }
    },
    mounted(){
        const route = useRoute();
        this.id = route.params.id;
        this.url += '/' + this.id;
        this.getEstudiante();
    },
    methods:{
        getEstudiante(){
            axios.get(this.url).then(
                res =>{
                    this.nombre = res.data.data.nombre;
                    this.apellido = res.data.data.apellido;
                    this.foto = res.data.data.foto;
                }
            );
        },
        actualizar(){
            event.preventDefault();
            var miFoto = document.getElementById('fotoimg')
            this.foto = miFoto.src;

            if(this.nombre.trim() === ''){
                mostraAlerta('Ingrese un nombre', 'warning', 'nombre');
            }else if(this.apellido.trim() === ''){
                mostraAlerta('Ingrese un apellido', 'warning', 'apellido');
            }else{
                var parametros = {nombre:this.nombre.trim(), apellido:this.apellido.trim(), foto:this.foto.trim()};
                enviarSolicitud('PUT',parametros, this.url, 'Estudiante actualizado')
            }

        },
        previsualizarFoto(event){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload=function(){
                var miFoto = document.getElementById('fotoimg');
                miFoto.src = reader.result;
                this.foto = miFoto.src;
            }
        }
    }
}
</script>
