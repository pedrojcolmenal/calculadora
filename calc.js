function operation(value){
    let result;
    if(value=='ac'){
        resultado.innerHTML = '';
    }
    else if(value=='ce'){
        resultado.innerHTML = resultado.innerHTML.slice(0, -1);;
    }
    else if(value=='='){
        try{    
            //console.log( resultado.innerHTML.replaceAll("%", "*0.01"))
            result=eval(resultado.innerHTML.replaceAll("%", "*0.01"));
        }catch(error){
            //console.log('Error en operación');
            result = 'Error en operación';
        }
        
        resultado.innerHTML=result;
    }
    else{
        if(resultado.innerHTML=='Error en operación'){
            resultado.innerHTML = '';
        }
        console.log(value);
        resultado.innerHTML += value;
    }

}
