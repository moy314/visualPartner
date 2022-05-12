const Reader =  require("../../lib/utils/Reader");
//const explorers = Reader.readJsonFile("../../visualpartners.json");
const explorers = Reader.readJsonFile("visualpartners.json");



class visualPartnerService{

    static getStudents(){
        return explorers;


    }
}


console.log(visualPartnerService.getStudents()); 

module.exports = visualPartnerService;