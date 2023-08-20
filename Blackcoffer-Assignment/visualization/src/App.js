import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import VisualizationService from './service/VisualizationService';

function App() {
    const [statistics, setStatistics] = useState([]);

    const updateStatistics = (newStatistics) => {
        setStatistics(newStatistics);
    };

    useEffect(() => {
        const fetchInitialStatistics = async () => {
            try {
                const statisticsResponse = await VisualizationService.getHome();
                setStatistics(statisticsResponse.data);
            } catch (error) {
                console.error("Error fetching initial statistics:", error);
                // Handle the error
            }
        };

        fetchInitialStatistics();
    }, []); // Empty dependency array means this effect runs only once on component mount

    return (
        <div className="App">
            <Header updateStatistics={updateStatistics} />
            <Home statistics={statistics} />
            <Footer />
        </div>
    );
}

export default App;
