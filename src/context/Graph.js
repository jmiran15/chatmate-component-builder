import React, { useReducer, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

// Create Context
const GraphContext = createContext();

// Initial State
const initialState = { nodes: {} };

// Actions
export const CREATE_NODE = "CREATE_NODE";
export const DELETE_NODE = "DELETE_NODE";
export const ADD_DEPENDENCY = "ADD_DEPENDENCY";
export const EDIT_NODE = "EDIT_NODE";

// Reducer
const graphReducer = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      const id = uuidv4();
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [id]: {
            id,
            history: id,
            dependencies: [],
            ...action.payload,
          },
        },
      };

    case DELETE_NODE:
      const newNodes = { ...state.nodes };
      delete newNodes[action.payload];
      return { ...state, nodes: newNodes };

    case ADD_DEPENDENCY:
      if (
        action.payload.nodeId === action.payload.dependencyId ||
        (state.nodes[action.payload.dependencyId].dependencies &&
          state.nodes[action.payload.dependencyId].dependencies.includes(
            action.payload.nodeId
          ))
      ) {
        return new Error("This would create a circular dependency");
      } else {
        return {
          ...state,
          nodes: {
            ...state.nodes,
            [action.payload.nodeId]: {
              ...state.nodes[action.payload.nodeId],
              dependencies: [
                ...state.nodes[action.payload.nodeId].dependencies,
                action.payload.dependencyId,
              ],
            },
          },
        };
      }

    case EDIT_NODE:
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.payload.nodeId]: {
            ...state.nodes[action.payload.nodeId],
            ...action.payload,
          },
        },
      };

    default:
      return state;
  }
};

const topologicalSort = (nodes) => {
  let result = [];
  let visited = {};
  let visiting = {};
  let level = {};
  let maxLevel = 0;

  for (let node of Object.values(nodes)) {
    if (!dfs(node)) {
      throw new Error("Circular dependency detected");
    }
  }

  function dfs(node) {
    if (visiting[node.id]) {
      return false; // cycle detected
    }
    if (visited[node.id]) {
      return true; // already visited no need to revisit
    }
    visiting[node.id] = true;
    let nodeLevel = 0;
    for (let dep of node.dependencies) {
      if (nodes[dep]) {
        // check if dependency exists
        if (!dfs(nodes[dep])) {
          return false; // cycle detected
        }
        nodeLevel = Math.max(nodeLevel, level[dep] + 1);
      }
    }
    level[node.id] = nodeLevel;
    maxLevel = Math.max(maxLevel, nodeLevel);
    visited[node.id] = true;
    visiting[node.id] = false;
    if (!result[nodeLevel]) {
      result[nodeLevel] = [node.id];
    } else {
      result[nodeLevel].push(node.id);
    }
    return true;
  }

  return result.slice(0, maxLevel + 1);
};

export const GraphProvider = ({ children }) => {
  const [graphState, dispatch] = useReducer(graphReducer, initialState);

  const getAvailableDependencies = (id) => {
    let availableIds = [];
    const nodeIds = Object.keys(graphState.nodes);

    // Add all node id except the current node's id
    nodeIds.forEach(function (nodeId) {
      if (
        id !== nodeId &&
        !graphState.nodes[nodeId].dependencies.includes(id)
      ) {
        availableIds.push(nodeId);
      }
    });

    // Remove any nodeIds where the node's dependencies includes the current node's id to prevent circular dependency
    const circularIds = graphState.nodes[id].dependencies;
    availableIds = availableIds.filter(
      (nodeId) => !circularIds.includes(nodeId)
    );

    return availableIds;
  };

  const getDependencyOrder = () => {
    return topologicalSort(graphState.nodes);
  };

  return (
    <GraphContext.Provider
      value={{
        graphState,
        dispatch,
        getAvailableDependencies,
        getDependencyOrder,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

// Our custom hook
export const useGraph = () => useContext(GraphContext);
