import React, { Component } from 'react';
import VisualizationService from '../service/VisualizationService';
import Home from './Home'
export default class Header extends Component {
    state = {
        distinctTopics: [], 
        distinctRegions: [],
        distinctSwots: [],
        distinctCities: [],
        distinctCountries: [],
        distinctSectors: [],
        distinctPestles: [],
        distinctSources: [],// Initialize an empty array to hold the distinct topics
    };

    async componentDidMount() {
        try {
            // Fetch data for all distinct dropdowns
            const statisticsResponse = await VisualizationService.getHome();

            this.setState({
                statistics: statisticsResponse.data,
            });
            const topicResponse = await VisualizationService.getDistinctTopic();
            const regionResponse = await VisualizationService.getDistinctRegion();
            const swotResponse = await VisualizationService.getDistinctSwot();
            const cityResponse = await VisualizationService.getDistinctCity();
            const countryResponse = await VisualizationService.getDistinctCountry();
            const sectorResponse = await VisualizationService.getDistinctSector();
            const pestleResponse = await VisualizationService.getDistinctPestle();
            const sourceResponse = await VisualizationService.getDistinctSource();

            this.setState({
                distinctTopics: topicResponse.data,
                distinctRegions: regionResponse.data,
                distinctSwots: swotResponse.data,
                distinctCities: cityResponse.data,
                distinctCountries: countryResponse.data,
                distinctSectors: sectorResponse.data,
                distinctPestles: pestleResponse.data,
                distinctSources: sourceResponse.data,
            });
        }  catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }

    handleYearSelection = async (selectedYear) => {
        try {
            const response = await VisualizationService.getByYear(selectedYear);
            console.log("called");
            console.log(response.data); // Assuming the API returns data
            this.props.updateStatistics(response.data);
            // Do whatever you need to do with the API response
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error
        }
    }

    handleTopicClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctTopic();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleRegionClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctRegion();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleSectorClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctSector();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleCityClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctCity();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleCountryClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctCountry();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleSwotClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctSwot();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handlePestleClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctPestle();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }
    handleSourceClick = async () => {
        try {
            const topicResponse = await VisualizationService.getDistinctSource();
            this.setState({ distinctTopics: topicResponse.data });
        } catch (error) {
            console.error("Error fetching distinct topics:", error);
            // Handle the error
        }
    }

    handleTopicSelection = async (selectedTopic) => {
        try {
            const response = await VisualizationService.getByTopic(selectedTopic);
            console.log("Selected topic:", selectedTopic);
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }
    handleSectorSelection = async (sector) => {
        try {
            const response = await VisualizationService.getBySector(sector);
           
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handleCitySelection = async (city) => {
        try {
            const response = await VisualizationService.getBYCity(city);
           
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handleCountrySelection = async (country) => {
        try {
            const response = await VisualizationService.getByCountry(country);
            
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handleSwotSelection = async (swot) => {
        try {
            const response = await VisualizationService.getBySwot(swot);
           
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handlePestleSelection = async (pestle) => {
        try {
            const response = await VisualizationService.getByPestle(pestle);
            
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handleRegionSelection = async (Region) => {
        try {
            const response = await VisualizationService.getByRegion(Region);
            
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }

    handleSourceSelection = async (source) => {
        try {
            const response = await VisualizationService.getBySource(source);
            
           
            console.log(response.data);
            this.props.updateStatistics(response.data);
            // Perform any additional actions related to the selected topic
        } catch (error) {
            console.error("Error handling topic selection:", error);
            // Handle the error
        }
    }


   
    render() {
        const startYear = 2012;
        const endYear = 2050;
        const years = [];

        for (let i = startYear; i <= endYear; i++) {
            years.push(i);
        }
        const dropdownStyles = {
            maxHeight: '150px', // Adjust this value as needed
            overflowY: 'auto'
        };
       

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark " >
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        By End Year
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {years.map(year => (
                                            <li key={year}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleYearSelection(year)}
                                                >
                                                    {year}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleTopicClick}
                                    >
                                        By Topic
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctTopics.map((topic, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleTopicSelection(topic)}
                                                >
                                                    {topic}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleRegionClick}
                                    >
                                        By Region
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctRegions.map((Region, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleRegionSelection(Region)}
                                                >
                                                    {Region}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleCountryClick}
                                    >
                                        By Country
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctCountries.map((Country, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleCountrySelection(Country)}
                                                >
                                                    {Country}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleCityClick}
                                    >
                                        By City
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctCities.map((city, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleCitySelection(city)}
                                                >
                                                    {city}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handlePestleClick}
                                    >
                                        By Pestle
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctPestles.map((pestle, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handlePestleSelection(pestle)}
                                                >
                                                    {pestle}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleSwotClick}
                                    >
                                        By Swot
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctSwots.map((swot, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleSwotSelection(swot)}
                                                >
                                                    {swot}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleSourceClick}
                                    >
                                        By Source
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state. distinctSources.map((source, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleSourceSelection(source)}
                                                >
                                                    {source}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={this.handleSectorClick}
                                    >
                                        By Sector
                                    </a>
                                    <ul className="dropdown-menu year-dropdown" style={dropdownStyles}>
                                        {this.state.distinctSectors.map((sector, index) => (
                                            <li key={index}>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => this.handleSectorSelection(sector)}
                                                >
                                                    {sector}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <Home statistics={this.state.statistics} /> */}
                {/* <Home/> */}
            </div>
        );
    }
}
