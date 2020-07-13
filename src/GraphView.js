import React, { Component } from "react";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink,
} from "react-vis-force";
import uuid from "react-uuid";
import {
  organizationsArray,
  membersArray,
  // membersOrganizations,
  // organizationMembers,
  membersOrganizationsArray,
  // organizationMembersArray,
  // organizationMembersArray,
} from "./data";
class GraphView extends Component {
  render() {
    return (
      <div>
        <InteractiveForceGraph
          simulationOptions={{ height: 800, width: 800 }}
          labelAttr="label"
          zoom
          highlightDependencies
        >
          {membersArray.map((item) => (
            <ForceGraphNode
              node={{ id: item, label: item }}
              fill="red"
              key={uuid()}
            />
          ))}
          {organizationsArray.map((item) => (
            <ForceGraphNode
              node={{ id: item, label: item }}
              fill="blue"
              key={uuid()}
            />
          ))}
          {membersOrganizationsArray.map((item) =>
            item[1].map((val) => (
              <ForceGraphLink
                link={{ source: item[0], target: val, value: 1 }}
                key={uuid()}
              />
            ))
          )}
        </InteractiveForceGraph>
      </div>
    );
  }
}

export default GraphView;
