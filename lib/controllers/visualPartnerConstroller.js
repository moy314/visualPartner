const visualPartnerService = require("../services/visualPartnerService");


class visualPartnerController{


    static getStudents(){
        return visualPartnerService.getStudents();


    }


    static haveCertification(){

       

        return visualPartnerService.haveCertification();

    }



    static credits(){

        return visualPartnerService.credits();  

    }



}

module.exports = visualPartnerController;