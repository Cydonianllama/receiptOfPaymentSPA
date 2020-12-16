let session : boolean = true;
export function toggleUserSessionSection() : string{
    let templateToShow = session === true ? 'hola' : 'chau';
    return templateToShow;
}