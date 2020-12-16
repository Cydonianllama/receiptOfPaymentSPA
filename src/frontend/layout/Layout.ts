import navTemplate from '../components/nav';
import footerTemplate from '../components/footer';

function renderContent(contentTemplate : string){
    let LayoutTemplate: string =
    `
        ${navTemplate}
        ${contentTemplate}
        ${footerTemplate}
    `; 
    return LayoutTemplate ; //as String;
}

export default renderContent;
