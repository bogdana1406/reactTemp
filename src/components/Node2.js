import React, { Component } from "react";
import { getInitialNode, createNode } from "../actions/nodeActions";
import { connect } from "react-redux";
import CreateNode from "./CreateNode";
class Node extends Component {
  constructor() {
    super();
    this.state = {
      type: "schema",
      name: "SCHEMA",
      //   text: "",
      //   parent: null,
      children: []
      //   attributes: [],
      //   childrenNames: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      type,
      name,
      children
      //   text,
      //   parent,
      //   children,
      //   attributes,
      //   childrenNames
    } = nextProps.node;

    this.setState({
      type,
      name,
      children
      //   text,
      //   parent,
      //   children,
      //   attributes,
      //   childrenNames
    });
  }
  //   componentDidMount() {
  //     this.props.getInitialNode();
  //   }

  onSubmit(e) {
    e.preventDefault();

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
    // this.props.getInitialNode();
  }

  render() {
    // const children = [];
    // if (this.props.node) {
    //   children = this.props.node.children;
    // }
    let myComponent;
    if (this.props.node.children !== undefined) {
      const { children } = this.props.node;
      console.log(children);
      //   console.log(this.props.node);
      /* {children.map(child => (
              <CreateNode child={child} />
            ))} */

      myComponent = children.map(child => <CreateNode child={child} />);
      //   myComponent = <CreateNode />;
    } else myComponent = null;
    // const { children } = this.props.node;
    // console.log(children);
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Node form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Node Name"
                    name="Name"
                    value={this.state.name}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Node Type"
                    name="type"
                    value={this.state.type}
                    disabled
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
            {myComponent}
            {/* {children.map(child => (
              <CreateNode child={child} />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  node: state.node.node
});
export default connect(mapStateToProps, { getInitialNode, createNode })(Node);
