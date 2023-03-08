/**
 * @fileoverview This file contains the code for the cartoon.
 * @author Heba Miftah
 * @version 1.0
 * @description
 * This file contains the code for the cartoon.
 * The cartoon is drawn using the canvas element.
 * The canvas element is supported by all modern browsers.
 * There are stars, trees, moon, a cartoon with a caption.
 * There is also a building with a door and a window.
 *
 * The code is made by writing functions for each object.
 */

// Function for making the background color
const drawBackground = function (ctx) {
  // Draw the background
  ctx.beginPath()
  ctx.rect(0, 0, 1400, 600)
  ctx.fillStyle = '#87CEEB'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()
}

// Function for drawing the cartoon
const drawTheCartoon = function (ctx) {
  // remove and close previously drawn lines
  ctx.beginPath()
  ctx.closePath()

  // Draw the cartoon Head
  ctx.arc(200, 370, 50, 0, Math.PI * 2)
  ctx.fillStyle = '#FFDAB9'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()

  // Draw a Cap
  ctx.beginPath()
  ctx.moveTo(150, 340) // move the cap down by 70
  ctx.lineTo(250, 340)
  ctx.lineTo(200, 290)
  ctx.closePath()
  ctx.fillStyle = '#663300'
  ctx.fill()
  ctx.stroke()

  // Draw eyes
  ctx.beginPath()
  ctx.arc(175, 365, 10, 0, Math.PI * 2, true) // move the eyes down by 70
  ctx.arc(225, 365, 10, 0, Math.PI * 2, true)
  ctx.fillStyle = '#FFFFFF'
  ctx.fill()
  ctx.stroke()

  // Draw pupils
  ctx.beginPath()
  ctx.arc(175, 365, 5, 0, Math.PI * 2, true)
  ctx.arc(225, 365, 5, 0, Math.PI * 2, true)
  ctx.fillStyle = '#000000'
  ctx.fill()
  ctx.stroke()

  // Draw nose
  ctx.beginPath()
  ctx.arc(200, 380, 10, 0, Math.PI, false) // move the nose down by 70
  ctx.fillStyle = '#663300' // Set the fill color
  ctx.fill()

  // draw eyebrows
  ctx.beginPath()
  ctx.moveTo(180, 348) // move the eyebrows down by 70
  ctx.lineTo(160, 348)
  ctx.moveTo(220, 348)
  ctx.lineTo(240, 348)
  ctx.stroke()

  // Draw mouth
  ctx.beginPath()
  ctx.arc(200, 390, 20, 0, Math.PI, false) // move the mouth down by 70
  ctx.fillStyle = '#FFDAB9'
  ctx.fill()
  ctx.stroke()

  // Draw upper body (shirt)
  ctx.beginPath()
  ctx.rect(168, 420, 62, 90) // move the upper body down by 70
  // with royal blue color
  ctx.fillStyle = '#4169E1'
  ctx.fill()

  // Draw Neck
  ctx.beginPath()
  ctx.arc(200, 420, 10, 0, Math.PI, false) // move the neck down by 70
  ctx.fillStyle = '#FFDAB9'
  ctx.fill()
  ctx.stroke()

  // Draw arms
  // set stroke color to royal blue
  ctx.strokeStyle = '#4169E1'
  ctx.beginPath()
  ctx.moveTo(170, 422) // move the arms down by 70
  ctx.lineTo(100, 470)
  ctx.moveTo(230, 422)
  ctx.lineTo(300, 470)

  ctx.lineWidth = 10
  ctx.stroke()

  // again set stroke color to black
  ctx.strokeStyle = '#4169E1'
  ctx.stroke()

  // Draw hands
  ctx.beginPath()
  ctx.arc(100, 470, 15, 0, Math.PI * 2, true) // move the hands down by 70
  ctx.arc(300, 470, 15, 0, Math.PI * 2, true)

  // Draw the fingers of the left hand
  ctx.moveTo(100, 470)
  ctx.lineTo(100, 490)
  ctx.moveTo(100, 470)
  ctx.lineTo(80, 470)
  ctx.moveTo(100, 470)
  ctx.lineTo(80, 490)

  // Draw the fingers of the right hand
  ctx.moveTo(300, 470)
  ctx.lineTo(300, 490)
  ctx.moveTo(300, 470)
  ctx.lineTo(320, 470)
  ctx.moveTo(300, 470)
  ctx.lineTo(320, 490)

  ctx.fill()

  ctx.fillStyle = '#FFDAB9'
  ctx.fill()

  // Draw legs with Pants color (blue) and shoes color (black)
  ctx.beginPath()
  ctx.rect(175, 510, 22, 90)
  ctx.fillStyle = '#8B4513'
  ctx.fill()
  ctx.beginPath()
  ctx.rect(203, 510, 22, 90)
  ctx.fillStyle = '#8B4513'
  ctx.fill()

  // Draw shoes
  ctx.beginPath()
  ctx.rect(175, 600, 22, 10)
  ctx.fillStyle = '#000000'
  ctx.fill()
  ctx.beginPath()
  ctx.rect(203, 600, 22, 10)
  ctx.fillStyle = '#000000'
  ctx.fill()

  // Add caption
  ctx.font = '24px sans-serif'
  ctx.fillStyle = '#000000'
  ctx.fillText('This is my boyfriend', 110, 230)
  // Add caption
  ctx.font = 'bold 24px sans-serif'
  ctx.fillStyle = '#000000'
  ctx.fillText('Edmund', 160, 270)
}

// Function to draw the moon
const drawTheMoon = function (ctx) {
  ctx.beginPath()
  ctx.arc(800, 0, 50, 0, Math.PI, false)
  ctx.fillStyle = '#F8F7D9'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()
}
// Function to draw the stars
const drawTheStars = function (ctx) {
  // Draw the stars using the loop
  for (var i = 0; i < 14; i++) {
    var x = Math.random() * 1300
    var y = Math.random() * 150
    ctx.beginPath()
    // draw the star of 5 points
    ctx.moveTo(x, y)
    ctx.lineTo(x + 5, y + 10)
    ctx.lineTo(x + 15, y + 10)
    ctx.lineTo(x + 5, y + 15)
    ctx.lineTo(x + 10, y + 25)
    ctx.lineTo(x, y + 20)
    ctx.lineTo(x - 10, y + 25)
    ctx.lineTo(x - 5, y + 15)
    ctx.lineTo(x - 15, y + 10)
    ctx.lineTo(x - 5, y + 10)

    ctx.lineTo(x, y)
    ctx.fillStyle = '#F8F7D9'
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = '#000'
    ctx.stroke()
  }
}

// Function to draw the cloud
const drawTheCloud = function (ctx) {
  // Draw the cloud in the sky
  ctx.beginPath()
  ctx.beginPath()

  ctx.fillStyle = '#FFFFFF'
  ctx.fill()
}
// Function to draw the tree
function drawTree(ctx, x, y, size, angle) {
  ctx.beginPath()
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate((angle * Math.PI) / 180)
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -size)
  ctx.stroke()
  if (size < 10) {
    ctx.restore()
    return
  }
  drawTree(ctx, 0, -size, size * 0.8, -15)
  drawTree(ctx, 0, -size, size * 0.8, 15)
  ctx.restore()
}

// Function to draw the many trees
const drawTheTree = function (ctx) {
  // set stroke color to green
  ctx.strokeStyle = '#228B22'
  //  Define the tree function
  drawTree(ctx, 700, 600, 35, 0)
  drawTree(ctx, 600, 600, 25, 0)
  drawTree(ctx, 1220, 600, 30, 0)
  drawTree(ctx, 1320, 600, 40, 0)
}

// Function to draw the tree with rectangle and circle
const drawRectAndCircleTree = function (ctx) {
  // Draw the tree
  ctx.beginPath()
  ctx.rect(450, 520, 60, 80)
  // brown color
  ctx.fillStyle = '#8B4513'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(480, 410, 120, 0, Math.PI * 2, true)
  ctx.fillStyle = '#228B22'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()
}

// Function to draw the house
const drawBuilding = function (ctx) {
  // Set the fill and stroke styles
  ctx.fillStyle = '#CCCCCC'
  ctx.strokeStyle = '#333333'
  // Begin a new path for the roof
  ctx.beginPath()
  ctx.moveTo(800, 300)
  ctx.lineTo(1200, 300)
  ctx.lineTo(1000, 100)
  ctx.closePath()
  // Draw the roof
  ctx.fill()
  ctx.stroke()

  // Begin a Home path for the home
  // change the fill color to light orange
  ctx.fillStyle = '#FFDAB9'
  ctx.beginPath()
  ctx.moveTo(800, 300)
  ctx.lineTo(1200, 300)
  ctx.lineTo(1200, 600)
  ctx.lineTo(800, 600)
  ctx.closePath()
  // Draw the home
  ctx.fill()
  ctx.stroke()
  // Draw the door
  ctx.beginPath()
  ctx.rect(850, 450, 100, 200)
  ctx.fillStyle = '#8B4513'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()
  // draw the door knob
  ctx.beginPath()
  ctx.arc(950, 550, 5, 0, Math.PI * 2, true)
  ctx.fillStyle = '#000000'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000'
  ctx.stroke()

  // Draw the window of the home of four rectangles using the loop
  for (var i = 0; i < 2; i++) {
    ctx.beginPath()
    ctx.rect(1020 + i * 50, 450, 40, 40)
    ctx.rect(1020 + i * 50, 500, 40, 40)
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = '#000'
    ctx.stroke()
  }
}

// Main function to draw the draw everything on the canvas
window.onload = function () {
  var canvas = document.getElementById('myCanvas')
  var ctx = canvas.getContext('2d')

  // Draw the background
  drawBackground(ctx)
  // Draw the cartoon
  drawTheCartoon(ctx)
  // Draw the moon
  drawTheMoon(ctx)
  // Draw the stars
  drawTheStars(ctx)
  // Draw the cloud
  drawTheCloud(ctx)
  // Draw the tree
  drawTheTree(ctx)
  // Draw the rectangle and circle tree
  drawRectAndCircleTree(ctx)
  // Draw the building
  drawBuilding(ctx)
}
