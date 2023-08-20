package com.BlackCoffer.Visualization.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.BlackCoffer.Visualization.model.Statistics;

public interface StatisticsRepo extends JpaRepository<Statistics, Integer> {
	//@Query("SELECT s FROM Statistics s WHERE s.endyear <= :endyear") or the below
	@Query(" FROM Statistics  WHERE endyear <= :endyear")
	public List<Statistics> findByEndyear(@Param ("endyear")int endyear);
	public List<Statistics> findByTopic(String topic);
	public List<Statistics> findBySector(String sector);
	public List<Statistics> findByRegion(String region);
	public List<Statistics> findByPestle(String pestle);
	public List<Statistics> findBySource(String Source);
	public List<Statistics> findBySwot(String swot);
	public List<Statistics> findByCountry(String country);
	public List<Statistics> findByCity(String city);
	@Query(" SELECT DISTINCT topic FROM Statistics")
	public List<String> topic();
	@Query(" SELECT DISTINCT sector FROM Statistics")
	public List<String> sector();
	@Query(" SELECT DISTINCT swot FROM Statistics")
	public List<String> swot();
	@Query(" SELECT DISTINCT region FROM Statistics")
	public List<String> region();
	@Query(" SELECT DISTINCT city FROM Statistics")
	public List<String> city();
	@Query(" SELECT DISTINCT country FROM Statistics")
	public List<String> country();
	@Query(" SELECT DISTINCT pestle FROM Statistics")
	public List<String> pestle();
	@Query(" SELECT DISTINCT source FROM Statistics")
	public List<String> source();
	
	
	

}
