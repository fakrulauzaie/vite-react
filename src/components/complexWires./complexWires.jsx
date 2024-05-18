import { useEffect, useState } from "react";

const ComplexWires = () => {
  const [wireColor, setWireColor] = useState("");
  const [hasLED, setHasLED] = useState(false);
  const [hasStar, setHasStar] = useState(false);
  const [finalChoice, setFinalChoice] = useState(false);

  const buttonData = [
    { color: "Red", backgroundColor: "red", colorText: "white" },
    { color: "Blue", backgroundColor: "blue", colorText: "white" },
    { color: "Red & Blue", backgroundColor: "purple", colorText: "white" },
    {
      color: "White",
      backgroundColor: "white",
      colorText: "black",
      borderColor: "black",
    },
  ];

  const handleColorButtonClick = (color) => {
    setWireColor(color);
  };

  const getBackgroundColor = () => {
    if (wireColor === "Red & Blue") {
      return "purple";
    }
    return wireColor;
  };

	const renderFinalSections = () => {
    if (wireColor === 'Red' && !hasLED && !hasStar) {
      return (
				<>
        <div className="wire-section">
					<h2>3. Red wire, and no status?</h2>

          <label>
            <input type="checkbox" checked={finalChoice} onChange={() => setFinalChoice(!finalChoice)} />
            {' '} Last Serial Number is Even?
          </label>
        </div>
				<p className="exact-answer">
					{finalChoice ? "CUT THE WIRE" : "Do NOT cut the wire"}
				</p>
				</>
      );
    }

		else if (wireColor === 'Red' && !hasLED && hasStar) {
      return (
				<>
				<p className="exact-answer">
					CUT THE WIRE
				</p>
				</>
      );
    }

    else if (wireColor === 'Red' && ((hasLED && hasStar) || hasLED)) {
      return (
				<>
        <div className="wire-section">
					<h2>3. Red wire, and no status?</h2>

          <label>
            <input type="checkbox" checked={finalChoice} onChange={() => setFinalChoice(!finalChoice)} />
            {' '} 2 or more batteries?
          </label>
        </div>
				<p className="exact-answer">
					{finalChoice ? "CUT THE WIRE" : "Do NOT cut the wire"}
				</p>
				</>
      );
    }


		return null; 
  };

	useEffect(() => {
	}, []);

  return (
    <div>
			<div className="wire-section">
      <h2>1. Select wire color</h2>

      {buttonData.map((button, index) => (
        <button
          key={index}
          onClick={() => handleColorButtonClick(button.color)}
          style={{
            backgroundColor: button.backgroundColor,
            marginRight: "10px",
            cursor: "pointer",
            color: button.colorText,
            border: `1px solid ${button.borderColor}`,
          }}
        >
          {button.color}
        </button>
				
      ))}
          <p
            className="selected-wire-color"
            style={{
              backgroundColor: getBackgroundColor(),
              color: wireColor === "White" ? "black" : "white",
            }}
          >
            Current selected wire color: {wireColor}
          </p>
			</div>

      {wireColor && (
				<>
        <div className="wire-section">
          <h2>2. Select wire status</h2>
          <p>
            Tick where applicable. If none, let it empty and continue to next
            section.{" "}
          </p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={hasLED}
                onChange={() => setHasLED(!hasLED)}
              />{" "}
              Has LED?
            </label>
					</div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={hasStar}
                onChange={() => setHasStar(!hasStar)}
              />{" "}
              Has Star?
            </label>
          </div>
				</div>
					{renderFinalSections()}
				</>
      )}
    </div>
  );
};

export default ComplexWires;
