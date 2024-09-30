let precio = 0;
let extra = "";

function callback(tipoDeHamburguesa, adic1, adic2, adic3, adic4, adic5, adic6, adic7, adic8){
    switch (tipoDeHamburguesa) {
        case "Carne a la parrilla":
            precio = 1800
            break;
        case "Pollo":
            precio = 1500
            break;
        
        case "Vegetariana":
            precio = 1200
            break;
    
        default:
            precio = 0
            break;
    }   
        switch (adic1) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
        
            switch (adic2) {
                case "Jamón":
                    precio += 30
                    break;
                
                case "Queso":
                    precio += 25
                    break;
            case "Salsa de tomate":
                    precio += 5
                    break;
            
                case "Mayonesa":
                    precio += 5
                    break;
                case "Mostaza":
                    precio += 5
                    break;
    
                case "Tomate":
                precio += 15
                break;
    
                case "Lechuga":
                    precio += 10
                    break;
    
                case "Cebolla":
                precio += 10
                    break;
            
                default: 
                precio += 0
                    break;
            }
    
        switch (adic3) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    
        switch (adic4) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    
        switch (adic5) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    {
        switch (adic6) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    {
        switch (adic7) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    {
        switch (adic8) {
            case "Jamón":
                precio += 30
                break;
            
            case "Queso":
                precio += 25
                break;
        case "Salsa de tomate":
                precio += 5
                break;
        
            case "Mayonesa":
                precio += 5
                break;
            case "Mostaza":
                precio += 5
                break;

            case "Tomate":
            precio += 15
            break;

            case "Lechuga":
                precio += 10
                break;

            case "Cebolla":
            precio += 10
                break;
        
            default: 
            precio += 0
                break;
        }
    }}}
    
    return precio;
    }
    

 function Total(nombre, apellido, tipoDeHamburguesa, adic1, adic2, adic3, adic4, adic5, adic6, adic7, adic8) {
 
    let totalidad = callback(tipoDeHamburguesa, adic1, adic2, adic3, adic4, adic5, adic6, adic7, adic8);
    
    console.log(`
    Estimado/a ${nombre} ${apellido}, el monto total a pagar es de $${totalidad}.
     `);
}

Total("Emanuel", "Rodriguez", "Pollo", "Tomate", "Cebolla", "Queso"); 