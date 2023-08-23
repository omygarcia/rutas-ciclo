
const isAuthenticatedGuard = (to,from,next)=>{
    //console.log({to,from,next});
    const random = Math.random()*100;

    if(random > 50)
    {
        console.log('Esta autenticado');
        next();
    }
    else
    {
        console.log('bloqueado por el isAuthenticatedGuard',random);
        next({name:'pokemon-home'});
    }
}

export default isAuthenticatedGuard;