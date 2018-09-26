function inputOne() {
  let text = document.getElementById('textOne').value
  let unitsOne = document.getElementById('unitsOne').value
  let unitsTwo = document.getElementById('unitsTwo').value
  let unitType = document.getElementById('unitType').value
  text = text.trim()

  if (!text.match(/^\d+$/)) {
    document.getElementById('textTwo').value = 'Please enter a number'
  }
  else if (unitType === 'distance') {
    distanceConverter(text, unitsOne, unitsTwo, 'textTwo')
  }
  else if (unitType === 'mass') {
    massConverter(text, unitsOne, unitsTwo, 'textTwo')
  }
  else if (unitType === 'temperature') {
    tempConverter(text, unitsOne, unitsTwo, 'textTwo')
  }
  else if (unitType === 'time') {
    timeConverter(text, unitsOne, unitsTwo, 'textTwo')
  }
}

function inputTwo() {
  let text = document.getElementById('textTwo').value
  let unitsOne = document.getElementById('unitsOne').value
  let unitsTwo = document.getElementById('unitsTwo').value
  let unitType = document.getElementById('unitType').value
  text = text.trim()

  if (!text.match(/^\d+$/)) {
    document.getElementById('textOne').value = 'Please enter a number'
  }
  else if (unitType === 'distance') {
    distanceConverter(text, unitsOne, unitsTwo, 'textOne')
  }
  else if (unitType === 'mass') {
    massConverter(text, unitsOne, unitsTwo, 'textOne')
  }
  else if (unitType === 'temperature') {
    tempConverter(text, unitsOne, unitsTwo, 'textOne')
  }
  else if (unitType === 'time') {
    timeConverter(text, unitsOne, unitsTwo, 'textTwo')
  }
}

function chooseUnitType() {
  document.getElementById('convertDiv').innerHTML = ''
  let unitType = document.getElementById('unitType').value
  console.log(unitType)

  let paraOne = document.createElement('p')
  let textOne = document.createElement('input')
  textOne.type = 'text'
  textOne.id = 'textOne'
  paraOne.appendChild(textOne)
  paraOne.innerHTML += ' '

  let paraTwo = document.createElement('p')
  let textTwo = document.createElement('input')
  textTwo.type = 'text'
  textTwo.id = 'textTwo'
  paraTwo.appendChild(textTwo)
  paraTwo.innerHTML += ' '

  if (unitType === 'distance') {
    let unitsOne = document.createElement('select')
    unitsOne.id = 'unitsOne'
    unitsOne.options.add(new Option('millimetres', 'mm'))
    unitsOne.options.add(new Option('centimetres', 'cm'))
    unitsOne.options.add(new Option('metres', 'm'))
    unitsOne.options.add(new Option('kilometres', 'km'))
    unitsOne.options.add(new Option('thou', 'th'))
    unitsOne.options.add(new Option('inches', 'in'))
    unitsOne.options.add(new Option('feet', 'ft'))
    unitsOne.options.add(new Option('yards', 'yd'))
    unitsOne.options.add(new Option('miles', 'mi'))
    paraOne.appendChild(unitsOne)
    document.getElementById('convertDiv').append(paraOne)

    let unitsTwo = document.createElement('select')
    unitsTwo.id = 'unitsTwo'
    unitsTwo.options.add(new Option('millimetres', 'mm'))
    unitsTwo.options.add(new Option('centimetres', 'cm'))
    unitsTwo.options.add(new Option('metres', 'm'))
    unitsTwo.options.add(new Option('kilometres', 'km'))
    unitsTwo.options.add(new Option('thou', 'th'))
    unitsTwo.options.add(new Option('inches', 'in'))
    unitsTwo.options.add(new Option('feet', 'ft'))
    unitsTwo.options.add(new Option('yards', 'yd'))
    unitsTwo.options.add(new Option('miles', 'mi'))
    paraTwo.appendChild(unitsTwo)
    document.getElementById('convertDiv').append(paraTwo)
  }
  else if (unitType === 'mass') {
    let unitsOne = document.createElement('select')
    unitsOne.id = 'unitsOne'
    unitsOne.options.add(new Option('micrograms', 'mcg'))
    unitsOne.options.add(new Option('milligrams', 'mg'))
    unitsOne.options.add(new Option('grams', 'g'))
    unitsOne.options.add(new Option('kilograms', 'kg'))
    unitsOne.options.add(new Option('tonnes', 'ton'))
    unitsOne.options.add(new Option('ounces', 'oz'))
    unitsOne.options.add(new Option('pounds', 'lb'))
    unitsOne.options.add(new Option('stone', 'st'))
    unitsOne.options.add(new Option('US tons', 'uston'))
    unitsOne.options.add(new Option('Imperial tons', 'impton'))
    paraOne.appendChild(unitsOne)
    document.getElementById('convertDiv').append(paraOne)

    let unitsTwo = document.createElement('select')
    unitsTwo.id = 'unitsTwo'
    unitsTwo.options.add(new Option('micrograms', 'mcg'))
    unitsTwo.options.add(new Option('milligrams', 'mg'))
    unitsTwo.options.add(new Option('grams', 'g'))
    unitsTwo.options.add(new Option('kilograms', 'kg'))
    unitsTwo.options.add(new Option('tonnes', 'ton'))
    unitsTwo.options.add(new Option('ounces', 'oz'))
    unitsTwo.options.add(new Option('pounds', 'lb'))
    unitsTwo.options.add(new Option('stone', 'st'))
    unitsTwo.options.add(new Option('US tons', 'uston'))
    unitsTwo.options.add(new Option('Imperial tons', 'impton'))
    paraTwo.appendChild(unitsTwo)
    document.getElementById('convertDiv').append(paraTwo)
  }
  else if (unitType === 'temperature') {
    let unitsOne = document.createElement('select')
    unitsOne.id = 'unitsOne'
    unitsOne.options.add(new Option('celsius', 'c'))
    unitsOne.options.add(new Option('fahrenheit', 'f'))
    unitsOne.options.add(new Option('Kelvin', 'k'))
    paraOne.appendChild(unitsOne)
    document.getElementById('convertDiv').append(paraOne)

    let unitsTwo = document.createElement('select')
    unitsTwo.id = 'unitsTwo'
    unitsTwo.options.add(new Option('celsius', 'c'))
    unitsTwo.options.add(new Option('fahrenheit', 'f'))
    unitsTwo.options.add(new Option('Kelvin', 'k'))
    paraTwo.appendChild(unitsTwo)
    document.getElementById('convertDiv').append(paraTwo)
  }
  else if (unitType === 'time') {
    let unitsOne = document.createElement('select')
    unitsOne.id = 'unitsOne'
    unitsOne.options.add(new Option('nanosecond', 'nano'))
    unitsOne.options.add(new Option('microsecond', 'micro'))
    unitsOne.options.add(new Option('millisecond', 'milli'))
    unitsOne.options.add(new Option('second', 'sec'))
    unitsOne.options.add(new Option('minute', 'min'))
    unitsOne.options.add(new Option('hour', 'hour'))
    unitsOne.options.add(new Option('day', 'day'))
    unitsOne.options.add(new Option('week', 'week'))
    unitsOne.options.add(new Option('month', 'month'))
    unitsOne.options.add(new Option('year', 'year'))
    unitsOne.options.add(new Option('decade', 'decade'))
    unitsOne.options.add(new Option('century', 'century'))
    paraOne.appendChild(unitsOne)
    document.getElementById('convertDiv').append(paraOne)

    let unitsTwo = document.createElement('select')
    unitsTwo.id = 'unitsTwo'
    unitsTwo.options.add(new Option('nanosecond', 'nano'))
    unitsTwo.options.add(new Option('microsecond', 'micro'))
    unitsTwo.options.add(new Option('millisecond', 'milli'))
    unitsTwo.options.add(new Option('second', 'sec'))
    unitsTwo.options.add(new Option('minute', 'min'))
    unitsTwo.options.add(new Option('hour', 'hour'))
    unitsTwo.options.add(new Option('day', 'day'))
    unitsTwo.options.add(new Option('week', 'week'))
    unitsTwo.options.add(new Option('month', 'month'))
    unitsTwo.options.add(new Option('year', 'year'))
    unitsTwo.options.add(new Option('decade', 'decade'))
    unitsTwo.options.add(new Option('century', 'century'))
    paraTwo.appendChild(unitsTwo)
    document.getElementById('convertDiv').append(paraTwo)
  }

  let textOneEvent = document.getElementById('textOne')
  textOneEvent.addEventListener('input', function() {inputOne()})

  let unitsOneEvent = document.getElementById('unitsOne')
  unitsOneEvent.addEventListener('input', function() {inputOne()})

  let textTwoEvent = document.getElementById('textTwo')
  textTwoEvent.addEventListener('input', function() {inputTwo()})

  let unitsTwoEvent = document.getElementById('unitsTwo')
  unitsTwoEvent.addEventListener('input', function() {inputOne()})
}

chooseUnitType('distance')

function distanceConverter(text, unitsOne, unitsTwo, resultLoc) {
  let result
  let resultType
  document.getElementById(resultLoc).value = ''

  if (unitsOne === 'mm') {
    result = mmToCm(text)
    resultType = 'cm'
  }
  else if (unitsOne === 'cm') {
    result = text
    resultType = 'cm'
  }
  else if (unitsOne === 'm') {
    result = mToCm(text)
    resultType = 'cm'
  }
  else if (unitsOne === 'km') {
    result = kmToCm(text)
    resultType = 'cm'
  }
  else if (unitsOne === 'th') {
    result = thToIn(text)
    resultType = 'in'
  }
  else if (unitsOne === 'in') {
    result = text
    resultType = 'in'
  }
  else if (unitsOne === 'ft') {
    result = ftToIn(text)
    resultType = 'in'
  }
  else if (unitsOne === 'yd') {
    result = ydToIn(text)
    resultType = 'in'
  }
  else if (unitsOne === 'mi') {
    result = miToIn(text)
    resultType = 'in'
  }


  if (resultType === 'cm') {
    if (unitsTwo === 'mm') {
      result = cmToMm(result)
    }
    else if (unitsTwo === 'm') {
      result = cmToM(result)
    }
    else if (unitsTwo === 'km') {
      result = cmToKm(result)
    }
    else if (unitsTwo === 'th') {
      result = cmToIn(result)
      result = inToTh(result)
    }
    else if (unitsTwo === 'in') {
      result = cmToIn(result)
    }
    else if (unitsTwo === 'ft') {
      result = cmToIn(result)
      result = inToFt(result)
    }
    else if (unitsTwo === 'yd') {
      result = cmToIn(result)
      result = inToYd(result)
    }
    else if (unitsTwo === 'mi') {
      result = cmToIn(result)
      result = inToMi(result)
    }
  }
  else if (resultType === 'in') {
    if (unitsTwo === 'mm') {
      result = inToCm(result)
      result = cmToMm(result)
    }
    else if (unitsTwo === 'cm') {
      result = inToCm(result)
    }
    else if (unitsTwo === 'm') {
      result = inToCm(result)
      result = cmToM(result)
    }
    else if (unitsTwo === 'km') {
      result = inToCm(result)
      result = cmToKm(result)
    }
    else if (unitsTwo === 'th') {
      result = inToTh(result)
    }
    else if (unitsTwo === 'ft') {
      result = inToFt(result)
    }
    else if (unitsTwo === 'yd') {
      result = inToYd(result)
    }
    else if (unitsTwo === 'mi') {
      result = inToMi(result)
    }
  }

  document.getElementById(resultLoc).value = result
}

function massConverter(text, unitsOne, unitsTwo, resultLoc) {
  let result
  let resultType
  document.getElementById(resultLoc).value = ''

  if (unitsOne === 'mcg') {
    result = mcgToG(text)
    resultType = 'g'
  }
  else if (unitsOne === 'mg') {
    result = mgToG(text)
    resultType = 'g'
  }
  else if (unitsOne === 'g') {
    result = text
    resultType = 'g'
  }
  else if (unitsOne === 'kg') {
    result = kgToG(text)
    resultType = 'g'
  }
  else if (unitsOne === 'ton') {
    result = tonToG(text)
    resultType = 'g'
  }
  else if (unitsOne === 'oz') {
    result = ozToLb(text)
    resultType = 'lb'
  }
  else if (unitsOne === 'lb') {
    result = text
    resultType = 'lb'
  }
  else if (unitsOne === 'st') {
    result = stToLb(text)
    resultType = 'lb'
  }
  else if (unitsOne === 'uston') {
    result = ustonToLb(text)
    resultType = 'lb'
  }
  else if (unitsOne === 'impton') {
    result = imptonToLb(text)
    resultType = 'lb'
  }


  if (resultType === 'g') {
      if (unitsTwo === 'mcg') {
        result = gToMcg(result)
      }
      else if (unitsTwo === 'mg') {
        result = gToMg(result)
      }
      else if (unitsTwo === 'kg') {
        result = gToKg(result)
      }
      else if (unitsTwo === 'ton') {
        result = gToTon(result)
      }
      else if (unitsTwo === 'oz') {
        result = gtoLb(result)
        result = lbToOz(result)
      }
      else if (unitsTwo === 'lb') {
        result = gtoLb(result)
      }
      else if (unitsTwo === 'st') {
        result = gtoLb(result)
        result = lbToSt(result)
      }
      else if (unitsTwo === 'uston') {
        result = gtoLb(result)
        result = lbToUston(result)
      }
      else if (unitsTwo === 'impton') {
        result = gtoLb(result)
        result = lbToImpton(result)
      }
  }
  else if (resultType === 'lb') {
    if (unitsTwo === 'mcg') {
      result = lbToG(result)
      result = gToMcg(result)
    }
    else if (unitsTwo === 'mg') {
      result = lbToG(result)
      result = gToMg(result)
    }
    else if (unitsTwo === 'g') {
      result = lbToG(result)
    }
    else if (unitsTwo === 'kg') {
      result = lbToG(result)
      result = gToKg(result)
    }
    else if (unitsTwo === 'ton') {
      result = lbToG(result)
      result = gToTon(result)
    }
    else if (unitsTwo === 'oz') {
      result = lbToOz(result)
    }
    else if (unitsTwo === 'st') {
      result = lbToSt(result)
    }
    else if (unitsTwo === 'uston') {
      result = lbToUston(result)
    }
    else if (unitsTwo === 'impton') {
      result = lbToImpton(result)
    }
  }

  document.getElementById(resultLoc).value = result
}

function tempConverter(text, unitsOne, unitsTwo, resultLoc) {
  let result
  document.getElementById(resultLoc).value = ''

  if (unitsOne === 'c' && unitsTwo === 'f') {
    result = cToF(text)
  }
  else if (unitsOne === 'f' && unitsTwo === 'c') {
    result = fToC(text)
  }
  else if (unitsOne === 'c' && unitsTwo === 'k') {
    text = parseInt(text)
    result = cToK(text)
  }
  else if (unitsOne === 'k' && unitsTwo === 'c') {
    result = kToC(text)
  }
  else if (unitsOne === 'f' && unitsTwo === 'k') {
    text = parseInt(text)
    result = fToK(text)
  }
  else if (unitsOne === 'k' && unitsTwo === 'f') {
    result = kToF(text)
  }
  else if (unitsOne === 'c' && unitsTwo === 'c') {
    result = text
  }
  else if (unitsOne === 'f' && unitsTwo === 'f') {
    result = text
  }
  else if (unitsOne === 'k' && unitsTwo === 'k') {
    result = text
  }

  document.getElementById(resultLoc).value = result
}

function timeConverter(text, unitsOne, unitsTwo, resultLoc) {
  let result
  let resultType
  document.getElementById(resultLoc).value = ''

  if (unitsOne === 'nano') {
    result = nanoToSec(text)
    resultType = 'sec'
  }
  else if (unitsOne === 'micro') {
    result = microToSec(text)
    resultType = 'sec'
  }
  else if (unitsOne === 'milli') {
    result = milliToSec(text)
    resultType = 'sec'
  }
  else if (unitsOne === 'sec') {
    result = text
    resultType = 'sec'
  }
  else if (unitsOne === 'min') {
    result = minToSec(text)
    resultType = 'sec'
  }
  else if (unitsOne === 'hour') {
    result = hourToSec(text)
    resultType = 'sec'
  }
  else if (unitsOne === 'day') {
    result = text
    resultType = 'day'
  }
  else if (unitsOne === 'week') {
    result = weekToDay(text)
    resultType = 'day'
  }
  else if (unitsOne === 'month' && unitsTwo === 'year') {
    result = monthToYear(text)
    resultType = 'month'
  }
  else if (unitsOne === 'year' && unitsTwo === 'month') {
    result = yearToMonth(text)
    resultType = 'month'
  }
  else if (unitsOne === 'month' && unitsTwo === 'decade') {
    result = monthToDecade(text)
    resultType = 'month'
  }
  else if (unitsOne === 'decade' && unitsTwo === 'month') {
    result = decadeToMonth(text)
    resultType = 'month'
  }
  else if (unitsOne === 'month' && unitsTwo === 'century') {
    result = monthToCentury(text)
    resultType = 'month'
  }
  else if (unitsOne === 'century' && unitsTwo === 'month') {
    result = centuryToMonth(text)
    resultType = 'month'
  }
  else if (unitsOne === 'month') {
    result = monthToDay(text)
    resultType = 'day'
  }
  else if (unitsOne === 'year') {
    result = yearToDay(text)
    resultType = 'day'
  }
  else if (unitsOne === 'decade') {
    result = decadeToDay(text)
    resultType = 'day'
  }
  else if (unitsOne === 'century') {
    result = centuryToDay(text)
    resultType = 'day'
  }

  if (resultType === 'sec') {
    if (unitsTwo === 'nano') {
      result = secToNano(result)
    }
    else if (unitsTwo === 'micro') {
      result = secToMicro(result)
    }
    else if (unitsTwo === 'milli') {
      result = secToMilli(result)
    }
    else if (unitsTwo === 'min') {
      result = secToMin(result)
    }
    else if (unitsTwo === 'hour') {
      result = secToHour(result)
    }
    else if (unitsTwo === 'day') {
      result = secToDay(result)
    }
    else if (unitsTwo === 'week') {
      result = secToDay(result)
      result = dayToWeek(result)
    }
    else if (unitsTwo === 'month') {
      result = secToDay(result)
      result = dayToMonth(result)
    }
    else if (unitsTwo === 'year') {
      result = secToDay(result)
      result = dayToYear(result)
    }
    else if (unitsTwo === 'decade') {
      result = secToDay(result)
      result = dayToDecade(result)
    }
    else if (unitsTwo === 'century') {
      result = secToDay(result)
      result = dayToCentury(result)
    }
  }
  else if (resultType === 'day') {
    if (unitsTwo === 'nano') {
      result = dayToSec(result)
      result = secToNano(result)
    }
    else if (unitsTwo === 'micro') {
      result = dayToSec(result)
      result = secToMicro(result)
    }
    else if (unitsTwo === 'milli') {
      result = dayToSec(result)
      result = secToMilli(result)
    }
    else if (unitsTwo === 'min') {
      result = dayToSec(result)
      result = secToMin(result)
    }
    else if (unitsTwo === 'hour') {
      result = dayToSec(result)
      result = secToHour(result)
    }
    else if (unitsTwo === 'week') {
      result = dayToWeek(result)
    }
    else if (unitsTwo === 'month') {
      result = dayToMonth(result)
    }
    else if (unitsTwo === 'year') {
      result = dayToYear(result)
    }
    else if (unitsTwo === 'decade') {
      result = dayToDecade(result)
    }
    else if (unitsTwo === 'century') {
      result = dayToCentury(result)
    }
  }

  document.getElementById(resultLoc).value = result
}

function cmToMm(num) {
  return num * 10
}

function mmToCm(num) {
  return num / 10
}

function cmToM(num) {
  return num / 100
}

function mToCm(num) {
  return num * 100
}

function cmToKm(num) {
  return num / 100000
}

function kmToCm(num) {
  return num * 100000
}

function cmToIn(num) {
  return num * 0.3937007874
}

function inToCm(num) {
  return num / 0.3937007874
}

function thToIn(num) {
  return num / 1000
}

function inToTh(num) {
  return num * 1000
}

function ftToIn(num) {
  return num * 12
}

function inToFt(num) {
  return num / 12
}

function ydToIn(num) {
  return num * 36
}

function inToYd(num) {
  return num / 36
}

function miToIn(num) {
  return num * 63360
}

function inToMi(num) {
  return num / 63360
}


function mcgToG(num) {
  return num / 1000000
}

function gToMcg(num) {
  return num * 1000000
}

function mgToG(num) {
  return num / 1000
}

function gToMg(num) {
  return num * 1000
}

function kgToG(num) {
  return num * 1000
}

function gToKg(num) {
  return num / 1000
}

function tonToG(num) {
  return num * 1000000
}

function gToTon(num) {
  return num / 1000000
}

function gtoLb(num) {
  return num / 453.592
}

function lbToG(num) {
  return num * 453.592
}

function ozToLb(num) {
  return num / 16
}

function lbToOz(num) {
  return num * 16
}

function stToLb(num) {
  return num * 14
}

function lbToSt(num) {
  return num / 14
}

function ustonToLb(num) {
  return num * 2000
}

function lbToUston(num) {
  return num / 2000
}

function imptonToLb(num) {
  return num * 2240
}

function lbToImpton(num) {
  return num / 2240
}

function cToF(num) {
  return num * (9/5) + 32
}

function fToC(num) {
  return (num - 32) * (5/9)
}

function cToK(num) {
  return num + 273.15
}

function kToC(num) {
  return num - 273.15
}

function fToK(num) {
  return (num + 459.67) * (5/9)
}

function kToF(num) {
  return num * (9/5) - 459.67
}

function nanoToSec(num) {
  return num / 1000000000
}

function secToNano(num) {
  return num * 1000000000
}

function microToSec(num) {
  return num / 1000000
}

function secToMicro(num) {
  return num * 1000000
}

function milliToSec(num) {
  return num / 1000
}

function secToMilli(num) {
  return num * 1000
}

function minToSec(num) {
  return num * 60
}

function secToMin(num) {
  return num / 60
}

function hourToSec(num) {
  return num * 3600
}

function secToHour(num) {
  return num / 3600
}

function dayToSec(num) {
  return num * 86400
}

function secToDay(num) {
  return num / 86400
}

function weekToDay(num) {
  return num * 7
}

function dayToWeek(num) {
  return num / 7
}

function monthToDay(num) {
  return num * 30.4167
}

function dayToMonth(num) {
  return num / 30.4167
}

function yearToDay(num) {
  return num * 365
}

function dayToYear(num) {
  return num / 365
}

function yearToMonth(num) {
  return num * 12
}

function monthToYear(num) {
  return num / 12
}

function decadeToMonth(num) {
  return num * 120
}

function monthToDecade(num) {
  return num / 120
}

function centuryToMonth(num) {
  return num * 1200
}

function monthToCentury(num) {
  return num / 1200
}

function decadeToDay(num) {
  return num * 3650
}

function dayToDecade(num) {
  return num / 3650
}

function centuryToDay(num) {
  return num * 36500
}

function dayToCentury(num) {
  return num / 36500
}
