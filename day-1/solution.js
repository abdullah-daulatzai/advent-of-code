import fs from 'fs'

try {
  // Try reading the files
  let input = fs.readFileSync('day-1/input.txt', 'utf-8')
  let dempInput = fs.readFileSync('day-1/demo-input.txt', 'utf-8')

  let rightList = []
  let leftList = []
  let totalDistance = 0 // set initial value to 0

  // Split the input by new lines and then by spaces to form pairs of numbers
  let inputArray = input
    .split('\n')
    .map((line) => line.split(/\s+/).map(Number))

  // Separate the left and right lists from the input and sort each list
  leftList = inputArray.map((pair) => pair[0]).sort()
  rightList = inputArray.map((pair) => pair[1]).sort()

  // Calculate the absolute difference by pairing corresponding elements

  for (let i = 0; i < rightList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i])
  }

  console.log('Total Distance', totalDistance)

  // --- Part-1 solved --- //
} catch (err) {
  console.error('Error reading file:', err.message)
}
