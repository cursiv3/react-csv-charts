import React from "react";
import "./style.css";
import Bargraph from "../charts/Bargraph/";

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      showBar: false,
      data: []
    };

    this.handleFiles = this.handleFiles.bind(this);
    this.splitLines = this.splitLines.bind(this);
    this.callCSVconverter = this.callCSVconverter.bind(this);
  }

  handleFiles = file => {
    let reader = new FileReader();
    reader.onload = file => {
      this.setState(Object.assign({}, this.state, { file: reader.result }));
    };
    reader.readAsText(file.target.files[0]);
    var split = this.state.file.split("\n");
    var linesArray = this.splitLines(split).slice(1);
    this.callCSVconverter(linesArray);
  };

  splitLines = arr => {
    return arr.map(val => val.split(","));
  };

  callCSVconverter(incoming) {
    var split = this.state.file.split("\n");
    var linesArray = this.splitLines(split).slice(1);
    var csvArray = this.csvToArray(incoming);
    this.setState(Object.assign({}, this.state, { data: csvArray }));
  }

  csvToArray = twoDimArr => {
    console.log("*****", twoDimArr);
    let arr = twoDimArr[0].map((_, idx) => {
      let obj = {};
      for (let x = 1; x < twoDimArr.length; x++) {
        obj.name = twoDimArr[x][0];
        obj.value = twoDimArr[x][idx + 1];
        obj.header = twoDimArr[0][idx + 1];
      }
      return obj;
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="file-input-container">
        <input type="file" onChange={this.handleFiles} accept=".csv" />
        <Bargraph data={this.state.data} />
      </div>
    );
  }
}

export default FileInput;
