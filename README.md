# Algorithmic Shapes Generator

Generate unique images based on seed values that encode various parameters such as shape type, position, size, and color.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Shape Generator is a simple project that allows you to create images by providing a seed value that encodes different parameters for each shape. The encoded parameters include the shape type, position, size, and color, allowing you to generate a wide variety of unique images based on a single seed.

## Getting Started

To get started with the Shape Generator, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Use the input field to enter a seed value.
4. Click the "Generate Image" button to see the generated image based on the provided seed.

## Usage

The Shape Generator provides a simple user interface for generating images. You can enter any numeric seed value, and the generator will use that seed to encode parameters for each shape in the generated image. Feel free to experiment with different seed values to see the variety of images that can be generated.

## Configuration

You can configure the canvas size and the range of parameters encoded in the seed value by modifying the code in the `script.js` file. Adjust the canvas dimensions and the parameter calculations as needed to achieve the desired results.

```javascript
const canvasWidth = 400; // Adjust the canvas width
const canvasHeight = 400; // Adjust the canvas height

// ... (other code remains the same)
```

## Contributing

Contributions are welcome! If you have ideas for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request. Please ensure that your contributions adhere to the project's coding standards and guidelines.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE) (GNU GPLv3) - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the content according to your project's specifics. The README file now specifies the GNU GPLv3 as the license for your project.
