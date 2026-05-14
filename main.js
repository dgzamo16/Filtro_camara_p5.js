let canvas;
let video;
let tint_color = "";
let apply_tint = false;

function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  if (apply_tint && tint_color !== "") {
    tint(tint_color);
  } else {
    noTint();
  }
  image(video, 0, 0, 640, 480);
}

function take_snapshot() {
  let timestamp = year() + "-" + month() + "-" + day() + "_" + hour() + "h" + minute() + "m";
  save("captura_" + timestamp + ".png");
}

function filter_tint() {
  let input = document.getElementById("color_name").value;
  if (input.trim() !== "") {
    tint_color = input;
    apply_tint = true;
  }
}

function reset_tint() {
  tint_color = "";
  apply_tint = false;
  document.getElementById("color_name").value = "";
}
