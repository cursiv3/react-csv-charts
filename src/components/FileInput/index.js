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
  }

  handleFiles = file => {
    let reader = new FileReader();
    reader.onload = file => {
      var split = reader.result.split("\n");
      var linesArray = this.splitLines(split).slice(1);
      this.csvToArray(linesArray);
    };
    reader.readAsText(file.target.files[0]);
  };

  splitLines = arr => {
    return arr.map(val => val.split(","));
  };

  csvToArray = twoDimArr => {
    var result = twoDimArr[0].map((_, idx) => {
      let arr = [];
      let total = 0;
      for (let x = 1; x < twoDimArr.length; x++) {
        arr.push({
          name: twoDimArr[x][0],
          value: parseInt(twoDimArr[x][idx + 1]),
          header: twoDimArr[0][idx + 1]
        });
        total += parseInt(twoDimArr[x][idx + 1]);
      }
      arr.push({ total: total, header: twoDimArr[0][idx + 1] });
      return arr;
    });
    this.setState(Object.assign({}, this.state, { data: result }));
  };

  render() {
    return (
      <div className="file-input-container">
        <input type="file" onChange={this.handleFiles} accept=".csv" />
        <Bargraph data={this.state.data} />
      </div>
    );
  }
}

export default FileInput;
