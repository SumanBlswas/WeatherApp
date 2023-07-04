import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

const Bar: React.FC = () => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      Chart.register(...registerables);

      const chartContext = chartContainer.current.getContext("2d");

      if (chartContext) {
        const data = {
          labels: ["Morning", "Afternoon", "Evening", "Night"],
          datasets: [
            {
              label: "Temperature",
              data: [20, 34, 28, 22],
              backgroundColor: "red",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 10,
            },
          ],
        };

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(chartContext, {
          type: "bar",
          data: data,
          options: {
            scales: {
              x: {
                grid: {
                  display: true,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  callback: (value) => `${value}°C`,
                },
              },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const datasetLabel = context.dataset.label || "";
                    const value = context.parsed.y;
                    return `${datasetLabel}: ${value}°C`;
                  },
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div
      className="control-pane"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      <div className="control-section">
        <canvas
          ref={chartContainer}
          id="charts"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            top: 0,
            left: 0,
          }}
        ></canvas>
      </div>
    </div>
  );
};

export default Bar;
