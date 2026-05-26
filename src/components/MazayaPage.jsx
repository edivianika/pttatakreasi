import React from "react";

const frameStyle = {
  border: "none",
  width: "100%",
  height: "100vh",
  display: "block",
};

function MazayaPage() {
  return (
    <iframe
      title="Mazaya Landing Page"
      src="/trial/index.html"
      style={frameStyle}
    />
  );
}

export default MazayaPage;
