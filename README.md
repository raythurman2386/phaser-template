# NextJS Phaser Template

This is a template project that combines NextJS and Phaser, providing an easy setup for game development with the power of NextJS and the simplicity of Phaser.

## Features

- NextJS for server-side rendering and building web applications
- Phaser for creating interactive games
- Seamless integration of Phaser with NextJS
- Easy setup and configuration
- Customizable project structure

## Getting Started

### Deploy Your Own!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fraythurman2386%2Fphaser-template.git)

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher) or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raythurman2386/phaser-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd phaser-template
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

### Building for Production

To build the project for production, run the following command:

```bash
npm run build
# or
yarn build
```

The optimized production build will be generated in the `dist` directory.

### Customization

- The main game code is located in the `src/game` directory. You can modify the game logic, add new scenes, and customize the game as per your requirements.
- The NextJS project utilizes the App router, and the Game component is imported from the app/Game directory and rendered within the root page of the App router.
- Static assets such as images, audio files, and game assets should be placed in the `public` directory in the assets folder.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [NextJS](https://nextjs.org/)
- [Phaser](https://phaser.io/)
