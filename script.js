const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const generateImage = (seed, canvasWidth, canvasHeight) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  const params = decodeSeed(seed, canvasWidth, canvasHeight); // Decode the seed to get the parameters

  const numShapes = params.numShapes;

  for (let i = 0; i < numShapes; i++) {
    const x = params.x[i];
    const y = params.y[i];
    const size = Math.min(Math.max(params.size[i], 10), 100);
    const shape = params.shape[i];
    const color = params.color[i];

    ctx.fillStyle = color;

    if (shape === "rectangle") {
      ctx.fillRect(x, y, size, size);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};

const decodeSeed = (seed, canvasWidth, canvasHeight) => {
  const seedStr = seed.toString();
  const numShapes = Math.max(parseInt(seedStr.charAt(seedStr.length - 1)), 3); // Extract number of shapes with a minimum of 3

  const params = {
    numShapes: numShapes,
    x: [],
    y: [],
    size: [],
    shape: [],
    color: [],
  };

  const paramLength = Math.floor((seedStr.length - 1) / numShapes);

  for (let i = 0; i < numShapes; i++) {
    const startIndex = i * paramLength;
    const endIndex = startIndex + paramLength;

    const x =
      parseInt(seedStr.substring(startIndex, startIndex + 2)) *
      (canvasWidth / 100); // Adjusting for canvas width
    const y =
      parseInt(seedStr.substring(startIndex + 2, startIndex + 4)) *
      (canvasHeight / 100); // Adjusting for canvas height
    const size = parseInt(seedStr.substring(startIndex + 4, startIndex + 6));

    // Determine shape based on the last digit of the seed
    const shapeMask = seedStr.charAt(seedStr.length - 1);
    const shape = shapeMask.charAt(i) === "0" ? "rectangle" : "circle";

    // Determine color based on the specific portion of the seed
    const colorSeed = seedStr.substring(startIndex + 6, endIndex);
    const color = getColorFromSeed(colorSeed);

    params.x.push(x);
    params.y.push(y);
    params.size.push(size);
    params.shape.push(shape);
    params.color.push(color);
  }

  return params;
};

const getColorFromSeed = (seed) => {
  const r = seed % 256;
  const g = (seed * 2) % 256;
  const b = (seed * 3) % 256;
  return `rgb(${r}, ${g}, ${b})`;
};

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// const inputSeed = 35764295110100123456789; // Your input seed here
const generateRandomSeed = (length) => {
  const characters = "0123456789";
  let seed = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    seed += characters[randomIndex];
  }
  return seed;
};
// Generate a random seed of length 20
const inputSeed = generateRandomSeed(20);
console.log(inputSeed);

generateImage(inputSeed, canvasWidth, canvasHeight);
