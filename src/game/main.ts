import { Game, Types } from "phaser";
import { Breakout } from "./scenes";

export const gameConfig: Types.Core.GameConfig = {
  title: "NextJS Phaser Template",
  type: Phaser.WEBGL,
  parent: "game",
  backgroundColor: "#351f1b",
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    width: 800,
    height: 600,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [Breakout],
};

const StartGame = (parent: string) => {
  return new Game({ ...gameConfig, parent });
};

export default StartGame;
