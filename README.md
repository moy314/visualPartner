# visualPartner


en este proyecto se están utulizando las isguientes dependencias:
1.- jest 26.0.0
2.-express 4.18.1

Se hace uso de jest para ejecutrar las prubas unitarias necesarias en el proceso de diseño segun el procedimiento planteado por la metodoogía TDD.
Además espress es usado para la creacion del servidor y la informacion pueda ser entregada através del servidor local. en este caso configirado en 
el puerto 3000.


-------------------------------DISEÑO-------------------------------

Este pryecto de estructuró de la siguiente manera:


![image](https://user-images.githubusercontent.com/99104593/168188659-fce4e359-3ed7-46db-8b62-aca99e6d869b.png)


como base de datos se usa el aechivo visualpartners.json, que es leido através del reader.

-------visualPartnerService-------
Las funcionalidades se encientran desplegadas en el archivo visualPartnerService. este cuenta con la clase visualPartnerService que asu vez tiene los 
métodos estáticos:

1.-getStudents().

este método hace uso del Reader para obetener la lista de objetos del archivo visualpartners.json y regresar la informacion de los estudiantes.

 2.-haveCertification()

este método obtiene la informacion de la misma manera que el metodo anteriomente descrito. pero hace un filtrado de los alumnos que tienen un valor true en el 
parámetro de 'haveCertification'. para ello se utilizó la función .filter() y así obtener la lista de los estudiantes que cumplen con la condicion.
       
3.-credits()

este método tambien hace uso de la funcion .filter() pero esta vez seleccionando los estudiantes que cuentan con un valor mayor a 500 en el campo "credits".


-------visualPartnerController-------

El controlador funciona como una interfaz entre las funcionalidades desarrolladas y el servidor. Este script cuenta con tres métodos:



1.-getStudents().

2.-haveCertification()

3.-credits()

cada uno de estos métodos hace uso de los métodos implementados con el mismo nombre,que se encuentran en la clase visualPartnerService.




--------------------------------------------------------CÓMO USARLA----------------------------------------------











