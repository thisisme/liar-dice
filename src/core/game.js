export function checkIfBetter (hand) {
  const handType = checkType(hand)
}

function checkType (hand) {
  // hand = sortDices(hand)
  console.log(findDuplicates(hand))
}

function sortNumbers (arr) {
  return arr.sort((a, b) => a - b)
}

function findDuplicates (hand) {
  const count = hand =>
    hand.reduce((a, b) => ({ ...a,
      [b]: (a[b] || 0) + 1
    }), {})

  const duplicates = dices =>
    Object.keys(dices).filter((a) => dices[a] > 1)

  console.log(count(hand))
  console.log(duplicates(count(hand)))
}
