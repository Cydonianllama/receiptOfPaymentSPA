//escuchar en que routa me encuentro
//verificar los permisos de la ruta
//remover listeners antiguos (si hay)
//renderizar ruta
//activar los listeners
import {render,renderInit} from './router/router';

const container = document.getElementById('root');
function app() : void{
    let initialRender = () : void =>{
        renderInit();
    }
    let listenRoutes = () : void =>{
        let renderPage = (event : any) : void => {
            console.log(window.location.hash);
            render(window.location.hash);
            event.preventDefault();
        }
        window.addEventListener('hashchange',renderPage);
    }
    // listenRoutes();
    initialRender();
}
console.log(window.location.hash);
app();//all renders and action of my app in here