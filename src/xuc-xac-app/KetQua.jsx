import React, { Component } from "react";
import { connect } from 'react-redux';


class KetQua extends Component {
  render() {

    console.log('props', this.props);
    return (
      <div>
        <div>
          bạn chọn : <span className="text-danger">
            {this.props.banChon ? 'Tài' : 'Xỉu'}
          </span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">
            {this.props.soBanThang}
          </span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">
            {this.props.soBanChoi}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  // console.log(rootReducer.xucXac);
  // let newProps = { 
  //   banChon: rootReducer.xucXac.banChon,
  //   soBanThang: rootReducer.xucXac.soBanThang,
  //   soBanChoi : rootReducer.xucXac.soBanChoi
  // }
  return { 
    banChon: rootReducer.xucXac.banChon,
    soBanThang: rootReducer.xucXac.soBanThang,
    soBanChoi : rootReducer.xucXac.soBanChoi
  };
}

const ComponentXucXac = connect(mapStateToProps)(KetQua); //HOC 

export default ComponentXucXac;
