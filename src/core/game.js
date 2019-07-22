export function checkIfBetter (hand) {
  const handType = checkType(hand)
}

function checkType (hand) {
  // hand = sortDices(hand)
  hand = findDuplicates(hand)
  console.log(findTypeOfHand(hand))
}

function sortNumbers (arr) {
  return arr.sort((a, b) => a - b)
}

function findDuplicates (hand) {
  const count = hand =>
    hand.reduce((a, b) => ({ ...a,
      [b]: (a[b] || 0) + 1
    }), {})

  // const duplicates = dices =>
  //   Object.keys(dices).filter((a) => dices[a] > 1)

  return count(hand)
  // console.log(fixed)
  // console.log(Object.keys(fixed).length)
  // console.log(duplicates(count(hand)))
}

function findTypeOfHand (hand) {
  const handKeys = Object.keys(hand)
  let str = ''
  switch (handKeys.length) {
    case 1:
      str = 'Five of a kind!'
      break
    case 2:
      str = 'Four of a kind'
      console.log(hand)
      if (hand[handKeys[0]] === 3 || hand[handKeys[1]] === 3) {
        str = 'Full house'
      }
      break
    case 3:
      str = 'Three of a kind'
      if (hand[handKeys[0]] === 2 || hand[handKeys[1]] === 2 || hand[handKeys[2]] === 2) {
        str = 'Two pair'
      }
      break
    case 4:
      str = 'Pair'
      break
    case 5:
      const sortedHand = sortNumbers(handKeys)
      str = 'Runt'
      if (sortedHand[0] === '1' && sortedHand[4] === '5') {
        str = 'Low straight'
      }
      if (sortedHand[0] === '2' && sortedHand[4] === '6') {
        str = 'High straight'
      }
      break
  }

  return str
}
