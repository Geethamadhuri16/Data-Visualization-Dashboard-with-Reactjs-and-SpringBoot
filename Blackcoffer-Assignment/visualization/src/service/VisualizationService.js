import axios from 'axios';
const visualization_Base_URL="http://localhost:8080/getByEndYear/"
const visualization_Base_URL1="http://localhost:8080/distinctTopics"
const visualization_Base_URL2="http://localhost:8080/getByTopic/"
const url3="http://localhost:8080/distinctRegion"
const url4="http://localhost:8080/distinctSwot"
const url5="http://localhost:8080/distinctcity"
const url6="http://localhost:8080/distinctCountry"
const url7="http://localhost:8080/distinctSource"
const url8="http://localhost:8080/distinctPestle"
const url9="http://localhost:8080/distinctSector"
const url10="http://localhost:8080/getBySector/"
const url11="http://localhost:8080/getByRegion/"
const url12="http://localhost:8080/getByPestle/"
const url13="http://localhost:8080/getBySource/"
const url14="http://localhost:8080/getBySwot/"
const url15="http://localhost:8080/getByCountry/"
const url16="http://localhost:8080/getByCity/"
const url17="http://localhost:8080/Homepage"


class VisualizationService{
    getHome(){
        return axios.get(url17);
    }
    getByYear(year){
        return axios.get(visualization_Base_URL+year);
    }
   
    getByTopic(topic){
        return axios.get(visualization_Base_URL2+topic);
    }

    getByRegion(region){
        return axios.get(url11+region);

    }
    getBySwot(swot){
        return axios.get(url14+swot);

    }
    getBYCity(city){
        return axios.get(url16+city);

    }
    getByCountry(country){
        return axios.get(url15+country);

    }
    getBySector(sector){
        return axios.get(url10+sector);

    }
    getBySource(source){
        return axios.get(url13+source);

    }
    getByPestle(pestle){
        return axios.get(url12+pestle);

    }
    getDistinctTopic(){
        return axios.get(visualization_Base_URL1)
    }
    getDistinctRegion(){
        return axios.get(url3)
    }
    getDistinctSwot(){
        return axios.get(url4)
    }
    getDistinctCity(){
        return axios.get(url5)
    }
    getDistinctCountry(){
        return axios.get(url6)
    }
    getDistinctSector(){
        return axios.get(url9)
    }
    getDistinctPestle(){
        return axios.get(url8)
    }
    getDistinctSource(){
        return axios.get(url7)
    }

}
export default new VisualizationService()