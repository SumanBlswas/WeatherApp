import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

type SplineDataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  borderWidth: number;
  pointRadius: number;
  pointBackgroundColor: string;
  cubicInterpolationMode:
    | "monotone"
    | "default"
    | ((ctx: unknown, options: unknown) => "monotone" | "default" | undefined)
    | undefined;
};

const Spline: React.FC = () => {
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
              borderColor: "red",
              backgroundColor: "red",
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: "red",
              cubicInterpolationMode: "monotone",
            },
          ] as SplineDataset[],
        };

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(chartContext, {
          type: "line",
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
                type: "linear" as const,
                min: 0,
                max: 40,
                ticks: {
                  stepSize: 10,
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
      className="spline-container"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      <div className="spline-chart">
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

export default Spline;
