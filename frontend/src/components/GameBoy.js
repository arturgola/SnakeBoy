import React from "react";
import "./GameBoy.css";

const GameBoy = () => {
  return (
    <div className="gameboy" id="GameBoy">
      <div className="screen-area">
        <div className="power">
          <div className="indicator">
            <div className="led"></div>
            <span className="arc" style={{ zIndex: 2 }}></span>
            <span className="arc" style={{ zIndex: 1 }}></span>
            <span className="arc" style={{ zIndex: 0 }}></span>
          </div>
          POWER
        </div>

        <canvas className="display" id="mainCanvas"></canvas>

        <div className="label">
          <div className="title">GAME BOY</div>
          <div className="subtitle">
            <span className="c">C</span>
            <span className="o1">O</span>
            <span className="l">L</span>
            <span className="o2">O</span>
            <span className="r">R</span>
          </div>
        </div>
      </div>

      <div className="nintendo">Nintendo</div>

      <div className="controls">
        <div className="dpad">
          <div className="up">
            <i className="fa fa-caret-up"></i>
          </div>
          <div className="right">
            <i className="fa fa-caret-right"></i>
          </div>
          <div className="down">
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="left">
            <i className="fa fa-caret-left"></i>
          </div>
          <div className="middle"></div>
        </div>
        <div className="a-b">
          <div className="b">B</div>
          <div className="a">A</div>
        </div>
      </div>

      <div className="start-select">
        <div className="select">SELECT</div>
        <div className="start">START</div>
      </div>

      <div className="speaker">
        {Array.from({ length: 64 }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index % 2 === 0 ? "open" : "closed"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GameBoy;
