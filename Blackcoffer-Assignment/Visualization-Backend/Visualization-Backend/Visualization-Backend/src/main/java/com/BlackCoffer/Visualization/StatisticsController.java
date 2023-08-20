package com.BlackCoffer.Visualization;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.BlackCoffer.Visualization.model.Statistics;
import com.BlackCoffer.Visualization.service.StatisticsService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StatisticsController {
	@Autowired
	private StatisticsService service;

	@GetMapping("/Homepage")
	public ResponseEntity<List<Statistics>> home(){
		return service.home();
	}

	@GetMapping("/getByEndYear/{end_year}")
	public ResponseEntity<List<Statistics>> byEndYear(@PathVariable ("end_year") int end_year ){
		return service.byEndYear(end_year);
	}
//	@GetMapping("/getByStartyear/{start_year}")
//	public ResponseEntity<List<Statistics>> byStartYear(@PathVariable ("start_year") String start_year ){
//		return service.byStartYear(start_year);
//	}


	@GetMapping("/getByTopic/{topic}")
	public ResponseEntity<List<Statistics>> byTopic(@PathVariable ("topic") String topic ){
		return service.byTopic(topic);
	}
	@GetMapping("/getBySector/{sector}")
	public ResponseEntity<List<Statistics>> bySector(@PathVariable ("sector") String sector ){
		return service.bySector(sector);
	}
	@GetMapping("/getByRegion/{region}")
	public ResponseEntity<List<Statistics>> byRegion(@PathVariable ("region") String region ){
		return service.byRegion(region);
	}
	@GetMapping("/getByPestle/{pestle}")
	public ResponseEntity<List<Statistics>> bypestle(@PathVariable ("pestle") String pestle ){
		return service.byPestle(pestle);
	}
	@GetMapping("/getBySource/{source}")
	public ResponseEntity<List<Statistics>> bySource(@PathVariable ("source") String source ){
		return service.bySource(source);
	}
	@GetMapping("/getBySwot/{swot}")
	public ResponseEntity<List<Statistics>> bySwot(@PathVariable ("swot") String swot ){
		return service.bySwot(swot);
	}
	@GetMapping("/getByCountry/{country}")
	public ResponseEntity<List<Statistics>> byCountry(@PathVariable ("country") String country ){
		return service.byCountry(country);
	}
	@GetMapping("/getByCity/{city}")
	public ResponseEntity<List<Statistics>> byCity(@PathVariable ("city") String city ){
		return service.byCity(city);
	}
	
	@GetMapping("/distinctTopics")
	public List<String> topics(){
		return service.topic();
	}
	@GetMapping("/distinctRegion")
	public List<String> region(){
		return service.region();
	}
	@GetMapping("/distinctSwot")
	public List<String> swot(){
		return service.swot();
	}
	@GetMapping("/distinctcity")
	public List<String> city(){
		return service.city();
	}
	@GetMapping("/distinctCountry")
	public List<String> country(){
		return service.country();
	}
	
	@GetMapping("/distinctSource")
	public List<String> Source(){
		return service.source();
	}
	@GetMapping("/distinctPestle")
	public List<String>Pestle(){
		return service.pestle();
	}
	@GetMapping("/distinctSector")
	public List<String> Sector(){
		return service.sector();
	}
	





}
