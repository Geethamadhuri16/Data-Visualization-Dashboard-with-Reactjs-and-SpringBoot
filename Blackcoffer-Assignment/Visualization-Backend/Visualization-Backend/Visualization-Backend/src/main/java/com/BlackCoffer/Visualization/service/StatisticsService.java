package com.BlackCoffer.Visualization.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.BlackCoffer.Visualization.Dao.StatisticsRepo;
import com.BlackCoffer.Visualization.model.Statistics;

@Service
public class StatisticsService {
	@Autowired
	private StatisticsRepo repo;
	public ResponseEntity<List<Statistics>> home(){
		List<Statistics> all= repo.findAll();
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}

	}

	public ResponseEntity<List<Statistics>> byEndYear( int end_year ){
		List<Statistics> all=repo.findByEndyear(end_year);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	
//	public ResponseEntity<List<Statistics>> byStartYear( String start_year ){
//		List<Statistics> all=repo.findByStartyear(start_year);
//		if(all!=null) {
//			return new ResponseEntity<>(all,HttpStatus.OK);
//		}else {
//			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
//		}
//	}
	
	public ResponseEntity<List<Statistics>> byTopic( String topic ){
		List<Statistics> all=repo.findByTopic(topic);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<Statistics>> bySector( String sector ){
		List<Statistics> all=repo.findBySector(sector);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<Statistics>> byRegion( String region ){
		List<Statistics> all=repo.findByRegion(region);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<Statistics>> byPestle( String pestle ){
		List<Statistics> all=repo.findByPestle(pestle);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<List<Statistics>> bySource( String source ){
		List<Statistics> all=repo.findBySource(source);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<List<Statistics>> bySwot( String swot ){
		List<Statistics> all=repo.findBySwot(swot);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<List<Statistics>> byCountry( String country ){
		List<Statistics> all=repo.findByCountry(country);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<List<Statistics>> byCity( String city){
		List<Statistics> all=repo.findByCity(city);
		if(all!=null) {
			return new ResponseEntity<>(all,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
		}
	}

	public List<String> topic() {
		return repo.topic();
	}
	
	public List<String> sector() {
		return repo.sector();
	}
	public List<String> swot() {
		return repo.swot();
	}
	public List<String> region() {
		return repo.region();
	}
	public List<String> city() {
		return repo.city();
	}
	public List<String> country() {
		return repo.country();
	}
	public List<String> source() {
		return repo.source();
	}
	public List<String> pestle() {
		return repo.pestle();
	}
	
	

	

}
