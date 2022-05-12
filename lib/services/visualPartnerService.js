const Reader =  require("../../lib/utils/Reader");
//const explorers = Reader.readJsonFile("../../visualpartners.json");
const explorers = Reader.readJsonFile("visualpartners.json");



class visualPartnerService{

    static getStudents(){
        return explorers;


    }


    static haveCertification(){

       
        const filtrado = explorers.filter(explorer => explorer.haveCertification == true)

        return filtrado;

    }
}


console.log(visualPartnerService.haveCertification());
//const filtrado = explorers.filter(explorer => explorer.haveCertification == true)

//onsole.log(explorers[0].haveCertification);


// for(i = 0; i < explorers.length;i++){

//     if(explorers[i].haveCertification == true){
//     console.log(explorers[i].haveCertification);
//     }
// }





//console.log(visualPartnerService.getStudents()); 
//console.log(visualPartnerService.haveCertification()); 


module.exports = visualPartnerService;