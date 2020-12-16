import routes from './routes';
const container: any = document.getElementById('root');
export function render(hashUbication : string) : void {
    console.log(hashUbication);
    switch(hashUbication){
        case '#/Home' : container.innerHTML = routes.Home;
    }
}
export function renderInit() : void {
    container.innerHTML = routes.Home;
};