import React, { Component } from 'react';

export default class ProportionBar extends Component {
  render() {
    const {
      inss,
      irpf,
      netSalary,
      colorINSS = 'orange',
      colorIRPF = 'red',
      colorNetSalary = 'green',
      height = '20px',
    } = this.props;

    console.log(this.props);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: inss + '%',
            height,
          }}
        />

        <div
          style={{
            backgroundColor: colorIRPF,
            width: irpf + '%',
            height,
          }}
        />

        <div
          style={{
            backgroundColor: colorNetSalary,
            width: netSalary + '%',
            height,
          }}
        />
      </div>
    );
  }
}
