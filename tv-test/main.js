// ===== CREATE CHART =====
const chart = LightweightCharts.createChart(
  document.getElementById('chart'),
  {
    layout: {
      background: { color: '#0b0e11' },
      textColor: '#d1d4dc',
    },
    grid: {
      vertLines: { color: '#1e222d' },
      horzLines: { color: '#1e222d' },
    },
    crosshair: {
      mode: LightweightCharts.CrosshairMode.Normal,
    },
    timeScale: {
      borderColor: '#2a2e39',
      timeVisible: true,
      secondsVisible: false,
    },
    rightPriceScale: {
      borderColor: '#2a2e39',
    },
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
      horzTouchDrag: true,
      vertTouchDrag: true,
    },
    handleScale: {
      mouseWheel: true,
      pinch: true,
      axisPressedMouseMove: true,
    },
  }
);

// ===== CANDLE SERIES =====
const candles = chart.addCandlestickSeries({
  upColor: '#26a69a',
  downColor: '#ef5350',
  borderUpColor: '#26a69a',
  borderDownColor: '#ef5350',
  wickUpColor: '#26a69a',
  wickDownColor: '#ef5350',
});

// ===== SAMPLE DATA (TESTING ONLY) =====
const data = [
  { time: '2024-01-01', open: 100, high: 105, low: 95, close: 102 },
  { time: '2024-01-02', open: 102, high: 110, low: 101, close: 108 },
  { time: '2024-01-03', open: 108, high: 112, low: 104, close: 106 },
  { time: '2024-01-04', open: 106, high: 109, low: 100, close: 101 },
  { time: '2024-01-05', open: 101, high: 107, low: 98, close: 105 },
];

candles.setData(data);

// ===== RESET BUTTON =====
document.getElementById('resetZoom').addEventListener('click', () => {
  chart.timeScale().fitContent();
});

// ===== RESPONSIVE =====
window.addEventListener('resize', () => {
  chart.applyOptions({
    width: window.innerWidth,
    height: window.innerHeight - 48,
  });
});
