import React, { Component } from 'react';
import * as d3 from 'd3';
import VisualizationService from '../service/VisualizationService';
import { arc } from 'd3-shape';

class Home extends Component {
    componentDidMount() {
        this.createGraphsAndCharts(this.props.statistics);
    }

    componentDidUpdate(prevProps) {
        if (this.props.statistics !== prevProps.statistics) {
            this.createGraphsAndCharts(this.props.statistics);
        }
    }

    createGraphsAndCharts(statistics) {
        if (statistics.length === 0) {
            return;
        }

        this.createBarGraph('endyear', 'intensity', 'Intensity vs End Year', statistics);
        this.createBarGraph('endyear', 'likelihood', 'Likelihood vs End Year', statistics);
        this.createBarGraph('endyear', 'relevance', 'Relevance vs End Year', statistics);
        this.createPieChart('region', 'region-pie-chart', statistics);
        this.createPieChart('city', 'city-pie-chart', statistics);
        this.createPieChart('country', 'country-pie-chart', statistics);
        this.createPieChart('topic', 'topic-pie-chart', statistics);

    }
    createBarGraph(xProperty, yProperty, title) {
        const { statistics } = this.props;
        // const { statistics } = this.state;

        const margin = { top: 30, right: 30, bottom: 90, left: 60 };
        const width = 400 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svgContainer = d3.select(`#${xProperty}-${yProperty}-chart`);
        svgContainer.selectAll('svg').remove();

        const svg = svgContainer
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        const xScale = d3.scaleBand()
            .domain(statistics.map(stat => stat[xProperty].toString()))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(statistics, stat => stat[yProperty])])
            .range([height, 0]);

        svg.selectAll('.bar')
            .data(statistics)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', stat => xScale(stat[xProperty].toString()))
            .attr('width', xScale.bandwidth())
            .attr('y', stat => yScale(stat[yProperty]))
            .attr('height', stat => height - yScale(stat[yProperty]))
            .attr('fill', (d, i) => colorScale(i));

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('transform', 'rotate(-45) translate(-10,10)')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');

        svg.append('g')
            .call(d3.axisLeft(yScale));

        svg.append('text')
            .attr('transform', `translate(${width / 2},${height + margin.top + 20})`)
            .style('text-anchor', 'middle')
            .text(xProperty);

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left)
            .attr('x', 0 - (height / 2))
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text(yProperty);

        svg.append('text')
            .attr('x', width / 2)
            .attr('y', 0 - (margin.top / 2))
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text(title);
    }

    createPieChart(dataProperty, containerId, title) {
        const { statistics } = this.props;
        // const { statistics } = this.state;

        const dataCounts = d3.rollup(statistics, group => group.length, d => d[dataProperty]);
        const dataNames = Array.from(dataCounts.keys());

        const width = 600;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        const svgContainer = d3.select(`#${containerId}`);
        svgContainer.selectAll('svg').remove();

        const svg = svgContainer
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie()
            .value(d => d[1])
            .sort(null);

        const path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        const arcGroups = svg.selectAll('.arc')
            .data(pie(dataCounts))
            .enter().append('g')
            .attr('class', 'arc');

        arcGroups.append('path')
            .attr('d', path)
            .attr('fill', (d, i) => colorScale(i));

        // Adding legend
        const legend = svg.selectAll('.legend')
            .data(dataNames)
            .enter().append('g')
            .attr('class', 'legend')
            .attr('transform', (d, i) => `translate(-${width / 2},${i * 20 - height / 2})`);

        legend.append('rect')
            .attr('width', 18)
            .attr('height', 18)
            .style('fill', (d, i) => colorScale(i));

        legend.append('text')
            .attr('x', 24)
            .attr('y', 9)
            .attr('dy', '.35em')
            .style('text-anchor', 'start')
            .text(d => d);

        // // Adding title
        // const chartContainer = d3.select(`#${containerId}`)
        //     .append('div')
        //     .attr('class', 'chart-container');

        // // Adding title
        // chartContainer.append('h2')
        //     .attr('class', 'chart-title')
        //     .text(title);
    }

    render() {
        return (
            <div>
                <style>
                    {`
                    .chart-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    .bar-graphs {
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                        justify-content: center;
                        align-items: flex-start;
                    }

                    .pie-container {
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                        justify-content: center;
                        align-items: center;
                    }

                    .pie-charts {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        justify-content: center; /* Center vertically */
                        align-items: center; /* Center horizontally */
                    }
                    `}
                </style>
                <div className="chart-container">
                    <div className="bar-graphs">
                        <div id="endyear-intensity-chart"></div>
                        <div id="endyear-likelihood-chart"></div>
                        <div id="endyear-relevance-chart"></div>
                    </div>
                    <div className="pie-container">
                        <div className="pie-charts">
                            <h4>REGION</h4>
                            <div id="region-pie-chart"></div>
                        </div>
                        <div className="pie-charts">
                            <h4>CITY</h4>
                            <div id="city-pie-chart"></div>
                        </div>
                    </div>
                    <div className="pie-container">
                    <div className="pie-charts">
                        <h4>COUNTRY</h4>
                        <div id="country-pie-chart"></div>
                    </div>
                    <div className="pie-charts">
                        <h4>TOPIC</h4>
                        <div id="topic-pie-chart"></div>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;
