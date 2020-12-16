import renderContent from '../layout/Layout';
let pageHome : string = 
`
    <div class="home-container">
        <h2>Estas son las pruebas para mi app</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vero!</p>
        <button>ver mas</button>
    </div>
`;
function renderHome() : string {
    let templateHome : string = renderContent(pageHome);
    return templateHome;
}
export default renderHome;