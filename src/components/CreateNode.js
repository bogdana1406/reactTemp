import React, { Component } from "react";
import { getInitialNode, createNode } from "../actions/nodeActions";
import { connect } from "react-redux";

class CreateNode extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      name: "",
      children: []
    };
    this.onClick = this.onClick.bind(this);
    this.loadChildren = this.loadChildren.bind(this);
  }

  componentDidMount() {
    const { name, type, children } = this.props.child;

    this.setState({
      name,
      type,
      children
    });
  }

  onClick() {
    alert("click");
  }
  loadChildren() {
    // this.setState({ [name]: value });
    const updateNode = {
      type: this.state.type,
      name: this.state.name
      //   text: this.state.text,
      //   parent: this.state.parent,
      //   children: this.state.children,
      //   attributes: this.state.attributes,
      //   childrenNames: this.state.childrenNames
    };

    console.log(updateNode);
    this.props.createNode(updateNode);
  }
  render() {
    const { child } = this.props;
    console.log(child.name);
    return (
      <div>
        <div>{child.name}</div>
        <div>{child.type}</div>
        <button onClick={this.loadChildren}>loadChildren</button>
      </div>
    );
  }
}

export default connect(null, { createNode })(CreateNode);
