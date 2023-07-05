import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAPiWeather } from "../redux/weather/weather.action";

const Bar = ({ targetPlace }: { targetPlace: string }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const dispatch = useAppDispatch();

  const weather = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) => store.weatherReducer?.weather[`hourly?city=${targetPlace}`]
  );

  useEffect(() => {
    dispatch(getAPiWeather(`/forecast/hourly?city=${targetPlace}`));
  }, [dispatch, targetPlace]);

  useEffect(() => {
    if (chartContainer.current) {
      Chart.register(...registerables);

      const chartContext = chartContainer.current.getContext("2d");

      const tempArray = weather && [
        Math.round(weather[7].temp),
        Math.round(weather[11].temp),
        Math.round(weather[15].temp),
        Math.round(weather[19].temp),
      ];

      if (chartContext) {
        const data = {
          labels: ["Morning", "Afternoon", "Evening", "Night"],
          datasets: [
            {
              label: "Temperature",
              data: tempArray,
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
  }, [weather]);

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
