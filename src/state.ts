export type Slider = {
  id: string;
  min: number;
  max: number;
  unit: number;
  value: number;
  symbol: string;
};

export type Sliders = [Slider, Slider, Slider, Slider];

export const SLIDER_MODES = {
  OKHSV: "OKHSV",
  OKHSL: "OKHSL"
};

type StateType = {
  sliderMode: string;
  setSliderMode: Function;
  sliders: {
    [index: string]: Sliders;
    OKHSV: Sliders;
    OKHSL: Sliders;
  };
  readonly currentSliders: Sliders;
};

const State: StateType = {
  sliderMode: SLIDER_MODES.OKHSL,
  setSliderMode(mode: string) {
    this.sliderMode = mode;
  },
  sliders: {
    OKHSV: [
      {
        id: "Hue",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 0,
        symbol: ""
      },
      {
        id: "Saturation",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 0,
        symbol: ""
      },
      {
        id: "Value",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 252,
        symbol: ""
      },
      {
        id: "Alpha",
        min: 0,
        max: 255,
        unit: 1,
        value: 255,
        symbol: ""
      }
    ],
    OKHSL: [
      {
        id: "Hue",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 0,
        symbol: ""
      },
      {
        id: "Saturation",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 0,
        symbol: ""
      },
      {
        id: "Lightness",
        min: 0,
        max: 504,
        unit: 0.001,
        value: 252,
        symbol: ""
      },
      {
        id: "Alpha",
        min: 0,
        max: 255,
        unit: 1,
        value: 255,
        symbol: ""
      }
    ]
  },
  get currentSliders(): Sliders {
    return this.sliders[this.sliderMode];
  }
};

export default State;
