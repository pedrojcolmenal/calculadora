function operation(value){
    let result;
    if(value=='ac'){
        resultado.innerHTML = '';
    }
    else if(value=='ce'){
        if(resultado.innerHTML!='Error'){
            resultado.innerHTML = resultado.innerHTML.slice(0, -1);
        }
        else{
            resultado.innerHTML='';
        }
    }
    else if(value=='='){
        try{    
            //console.log( resultado.innerHTML.replaceAll("%", "*0.01"))
            if(resultado.innerHTML!=''){
                result=eval(resultado.innerHTML.replaceAll("%", "*0.01"));
            }
            else{
                result=0;
            }
        }catch(error){
            //console.log('Error en operación');
            result = 'Error';
        }  
        resultado.innerHTML=result;
    }
    else{
        if(resultado.innerHTML=='Error' || resultado.innerHTML=='0'){
            resultado.innerHTML = '';
        }
        //console.log(value);
        resultado.innerHTML += value;
    }

}
