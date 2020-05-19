import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NodeGroup from "react-move/NodeGroup";
import "../css/Components/BarChart.css";

let barHeight = 25;
let barPadding = 2;
let barColour = "#348AA7";
let widthScale = (d) => d * 3;

function BarGroup(props) {
  let width = widthScale(props.state.value);
  let yMid = barHeight * 0.5;

  function renderLogo() {
    if (props.logo) {
      return <props.logo />;
    }
  }

  return (
    <g className="bar-group" transform={`translate(0, ${props.state.y})`}>
      <rect
        y={barPadding * 0.5}
        width={((width / 10) * Math.sqrt(window.innerWidth)) / 4}
        height={barHeight - barPadding}
        style={{ fill: barColour, opacity: props.state.opacity }}
      />
      {renderLogo()}
      <text
        className="name-label"
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
        style={{ opacity: props.state.opacity }}
      >
        {props.data.name}
      </text>
    </g>
  );
}

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data, //getInitialData(),
      visible: props.visible,
    };

    this.renderBarChart = this.renderBarChart.bind(this);
    this.renderLogos = this.renderLogos.bind(this);
  }

  startTransition(d, i) {
    return { value: 0, y: i * barHeight, opacity: 0 };
  }

  enterTransition(d) {
    return { value: [d.value], opacity: [1], timing: { duration: 550 } };
  }
  /*
  updateTransition(d, i) {
    return { value: [d.value], y: [i * barHeight], timing: { duration: 300 } };
  }

  leaveTransition(d) {
    return { y: [-barHeight], opacity: [0], timing: { duration: 250 } };
  }
  */

  renderLogos() {
    if (this.props.logos) {
      const list_items = this.props.logos.map((logo, index) => {
        return (
          <div
            key={index}
            className="list-group-tech"
            style={{ height: "25px" }}
          >
            <p>{logo}</p>
          </div>
        );
      });
      return (
        <div
          className="list-group list-group-tech"
          style={{ paddingTop: "0.35vw", paddingLeft: "3.5vw" }}
        >
          {list_items}
        </div>
      );
    }
  }

  renderBarChart() {
    if (this.props.visible) {
      return (
        <Row className="d-flex justify-content-center">
          <Col xs={1}>{this.renderLogos()}</Col>
          <Col xs={5}>
            <svg width="800" height="200">
              <g className="chart" transform="translate(100,10)">
                <NodeGroup
                  data={this.state.data}
                  keyAccessor={(d) => d.name}
                  start={this.startTransition}
                  enter={this.enterTransition}
                  update={this.updateTransition}
                  leave={this.leaveTransition}
                >
                  {(nodes) => (
                    <g>
                      <rect
                        x={this.props.x}
                        y={1}
                        width={this.props.width}
                        height={this.props.height}
                        style={{ fill: "#004d66", opacity: 1.0 }}
                      />
                      {nodes.map(({ key, data, state }) => (
                        <BarGroup key={key} data={data} state={state} />
                      ))}
                    </g>
                  )}
                </NodeGroup>
              </g>
            </svg>
          </Col>
        </Row>
      );
    }
  }

  render() {
    return <div>{this.renderBarChart()}</div>;
  }
}

export default BarChart;
