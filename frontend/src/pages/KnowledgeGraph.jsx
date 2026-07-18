import { useEffect, useState } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import dagre from "@dagrejs/dagre";

import "@xyflow/react/dist/style.css";


const nodeWidth = 220;
const nodeHeight = 70;


function getLayoutedElements(nodes, edges) {

  const graph = new dagre.graphlib.Graph();

  graph.setDefaultEdgeLabel(() => ({}));

  graph.setGraph({
    rankdir: "LR",
    nodesep: 40,
    ranksep: 80,
    marginx: 20,
    marginy: 20,
  });


  nodes.forEach((node) => {

    graph.setNode(node.id, {
      width: 180,
      height: 60,
    });

  });


  edges.forEach((edge) => {

    graph.setEdge(
      edge.source,
      edge.target
    );

  });


  dagre.layout(graph);


  const layoutedNodes = nodes.map((node) => {

    const position = graph.node(node.id);


    return {

      ...node,

      position: {

        x: position.x - 90,

        y: position.y - 30,

      },

    };

  });


  return {

    nodes: layoutedNodes,

    edges,

  };

}


function KnowledgeGraph() {


  const [graph, setGraph] = useState(null);


  useEffect(() => {


    async function fetchGraph() {


      try {


        const response = await fetch(
          "http://127.0.0.1:8000/summary"
        );


        const data = await response.json();


        setGraph(data.graph);


      } catch (error) {


        console.error(error);


      }


    }


    fetchGraph();


  }, []);


  if (!graph) {


    return (

      <div className="dashboard">

        <h2>
          Loading Knowledge Graph...
        </h2>

      </div>

    );

  }


  // Limit nodes for a cleaner visual graph

  const importantNodes = graph.nodes.slice(0, 15);


  const nodeIds = new Set(

    importantNodes.map(
      (node) => node.id
    )

  );


  const nodes = importantNodes.map(
    (node) => ({

      id: node.id,

      type: "default",

      data: {

        label: (

          <div className="graph-node">

            <strong>
              {node.label}
            </strong>


            <small>
              {node.type}
            </small>

          </div>

        ),

      },

      position: {

        x: 0,

        y: 0,

      },

    })

  );


  const edges = graph.edges

    .filter(

      (edge) =>

        nodeIds.has(edge.source) &&

        nodeIds.has(edge.target)

    )

    .slice(0, 20)

    .map(

      (edge, index) => ({

        id: `edge-${index}`,

        source: edge.source,

        target: edge.target,

        label: edge.label,

        animated: true,

      })

    );


  const layout = getLayoutedElements(

    nodes,

    edges

  );


  return (

    <div className="dashboard">


      <h1>
        Knowledge Graph
      </h1>


      <p>
        AI-generated relationships from your document.
      </p>


      <div className="graph-container">


        <ReactFlow

          nodes={layout.nodes}

          edges={layout.edges}

          fitView

        >

          <Background />

          <Controls />

          <MiniMap />

        </ReactFlow>


      </div>


    </div>

  );

}


export default KnowledgeGraph;