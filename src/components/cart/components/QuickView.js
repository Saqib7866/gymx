import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";

class QuickView extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.openModal}
        toggle={this.props.closeModal}
        centered={true}
      >
        <ModalBody>
          <div className="quick-view">
            <div className="quick-view-image">
              <img
                src={
                  this.props.product.image
                    ? process.env.REACT_APP_API_URL +
                      this.props.product.image.url
                    : ""
                }
                alt={this.props.product.name}
              />
            </div>
            <div className="quick-view-details">
              <span className="product-name">{this.props.product.name}</span>
              <span className="product-price">{this.props.product.price}</span>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default QuickView;
