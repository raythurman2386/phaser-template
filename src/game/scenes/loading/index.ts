import { Scene } from "phaser";

export class LoadingScene extends Scene {
  constructor() {
    super("loading-scene");
  }

  preload(): void {
    // This points to the public/assets folder for any game assets
    this.load.baseURL = "assets/";
  }

  create(): void {
    console.log("Loading scene was created");
  }
}
