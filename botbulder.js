import { useEffect, useRef, useState } from "react";

const colors = { Price: "#3b82f6", SMA: "#10b981", Buy: "#ef4444" };
const grid = 20;
const snap = (value) => Math.round(value / grid) * grid;

export default function BotBuilder() {
  const builderRef = useRef(null);
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [nodeCount, setNodeCount] = useState(0);

  const addNode = (type) => {
    const builder = builderRef.current;
    const svg = svgRef.current;

    const newNodeCount = nodeCount + 1;
    const node = document.createElement("div");
    node.innerText = type;
    node.dataset.id = newNodeCount;
    node.style.position = "absolute";
    node.style.top = snap(50 + newNodeCount * 35) + "px";
    node.style.left = snap(50 + newNodeCount * 35) + "px";
    node.style.padding = "10px 20px";
    node.style.background = colors[type] || "#f3f4f6";
    node.style.border = "2px solid #9ca3af";
    node.style.borderRadius = "10px";
    node.style.cursor = "move";
    node.style.userSelect = "none";
    node.style.fontWeight = "bold";
    node.style.color = "white";
    node.style.transition = "transform 0.2s, box-shadow 0.2s";

    node.onmouseover = () => {
      node.style.transform = "scale(1.1)";
      node.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    };
    node.onmouseout = () => {
      node.style.transform = "scale(1)";
      node.style.boxShadow = "none";
    };

    // Drag
    node.onmousedown = (e) => {
      let shiftX = e.clientX - node.getBoundingClientRect().left;
      let shiftY = e.clientY - node.getBoundingClientRect().top;

      const moveAt = (pageX, pageY) => {
        node.style.left = snap(pageX - shiftX - builder.getBoundingClientRect().left) + "px";
        node.style.top = snap(pageY - shiftY - builder.getBoundingClientRect().top) + "px";
        updateConnections();
      };

      const onMouseMove = (e) => moveAt(e.pageX, e.pageY);

      document.addEventListener("mousemove", onMouseMove);
      node.onmouseup = () => document.removeEventListener("mousemove", onMouseMove);
    };
    node.ondragstart = () => false;

    builder.appendChild(node);
    setNodes((prev) => [...prev, node]);
    setNodeCount(newNodeCount);

    // Draw connection to previous node
    if (nodes.length > 0) drawConnection(nodes[nodes.length - 1], node, svg);
  };

  const drawConnection = (nodeA, nodeB, svg) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("stroke", "#6b7280");
    line.setAttribute("stroke-width", "2");
    line.dataset.a = nodeA.dataset.id;
    line.dataset.b = nodeB.dataset.id;

    // Add arrow marker if not exists
    if (!document.getElementById("arrow-marker")) {
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
      marker.setAttribute("id", "arrow");
      marker.setAttribute("markerWidth", "10");
      marker.setAttribute("markerHeight", "10");
      marker.setAttribute("refX", "10");
      marker.setAttribute("refY", "3");
      marker.setAttribute("orient", "auto");
      marker.setAttribute("markerUnits", "strokeWidth");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M0,0 L0,6 L9,3 z");
      path.setAttribute("fill", "#6b7280");
      marker.appendChild(path);
      defs.appendChild(marker);
      defs.id = "arrow-marker";
      svg.appendChild(defs);
    }

    line.setAttribute("marker-end", "url(#arrow)");
    svg.appendChild(line);
    updateConnections();
  };

  const updateConnections = () => {
    const svg = svgRef.current;
    svg.querySelectorAll("line").forEach((line) => {
      const a = nodes.find((n) => n.dataset.id === line.dataset.a);
      const b = nodes.find((n) => n.dataset.id === line.dataset.b);
      if (a && b) {
        const ax = a.offsetLeft + a.offsetWidth / 2;
        const ay = a.offsetTop + a.offsetHeight / 2;
        const bx = b.offsetLeft + b.offsetWidth / 2;
        const by = b.offsetTop + b.offsetHeight / 2;
        line.setAttribute("x1", ax);
        line.setAttribute("y1", ay);
        line.setAttribute("x2", bx);
        line.setAttribute("y2", by);
      }
    });
  };

  const resetBuilder = () => {
    nodes.forEach((n) => n.remove());
    setNodes([]);
    setNodeCount(0);
    svgRef.current.innerHTML = "";
  };

  return (
    <div>
      <div
        ref={builderRef}
        style={{
          position: "relative",
          width: "90%",
          height: "450px",
          margin: "0 auto",
          border: "2px dashed #d1d5db",
          borderRadius: "12px",
          background: "white",
          overflow: "hidden",
        }}
      >
        <svg ref={svgRef} style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }} />
      </div>

      <div style={{ marginTop: "20px" }}>
        {["Price", "SMA", "Buy"].map((type) => (
          <button
            key={type}
            onClick={() => addNode(type)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              background: colors[type],
              color: "white",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Add {type} Node
          </button>
        ))}
        <button
          onClick={resetBuilder}
          style={{
            padding: "10px 20px",
            background: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Reset Builder
        </button>
      </div>
    </div>
  );
}
