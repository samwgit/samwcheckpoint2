// SECTION Globals
let rupee = 500
let greenClick = 1
let currentClick = greenClick



// SECTION Sets price and multiplier of each auto clicker AKA (Navi/Midna)
let autoClick1 = {
  navi: {
    price: 500,
    quantity: 0,
    multiplier: 5
  }
};


let autoClick2 = {
  midna: {
    price: 1500,
    quantity: 0,
    multiplier: 20
  }
};


// SECTION Draws Rupee Auto Multiplier To The Screen
function updateRupeePerSecond() {
  let rupeePerThree = autoClick1.navi.multiplier * autoClick1.navi.quantity + autoClick2.midna.multiplier * autoClick2.midna.quantity;
  document.getElementById('rupeePerThree').innerText = rupeePerThree
}


function doAutoClick() {
  if (rupee >= autoClick1.navi.price) {
    rupee -= autoClick1.navi.price
    setInterval(naviClick, 3000)
    autoClick1.navi.quantity++
    autoClick1.navi.price += 500
    // @ts-ignore
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('navi').innerText = autoClick1.navi.price
    document.getElementById('naviAmount').innerText = autoClick1.navi.quantity
    updateRupeePerSecond()
  } else {
    window.alert("You're too poor")
  }
}


function doAutoClick2() {
  if (rupee >= autoClick2.midna.price) {
    rupee -= autoClick2.midna.price
    setInterval(midnaClick, 3000)
    autoClick2.midna.quantity++
    autoClick2.midna.price += 1500
    // @ts-ignore
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('midna').innerText = autoClick2.midna.price
    document.getElementById('midnaAmount').innerText = autoClick1.navi.quantity
    updateRupeePerSecond()

  } else {
    window.alert("You're too poor")
  }
}


// SECTION Draws Prices For Auto Clickers to the screen
function midnaClick() {
  rupee += autoClick2.midna.multiplier
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function naviClick() {
  rupee += autoClick1.navi.multiplier
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


// SECTION Unlock Rupee Interactivity
function unlockBlue() {
  if (rupee >= 500) {
    rupee -= 500
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('rbtn-2').removeAttribute('disabled')
    document.getElementById('r-1').setAttribute('hidden', true)
  } else {
    window.alert("You're Too Poor")
  }
}


function unlockRed() {
  if (rupee >= 1500) {
    rupee -= 1500
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('rbtn-3').removeAttribute('disabled')
    document.getElementById('r-2').setAttribute('hidden', true)
  } else {
    window.alert("You're Too Poor")
  }
}


function unlockPurple() {
  if (rupee >= 2000) {
    rupee -= 2000
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('rbtn-4').removeAttribute('disabled')
    document.getElementById('r-3').setAttribute('hidden', true)
  } else {
    window.alert("You're Too Poor")
  }
}


function unlockGold() {
  if (rupee >= 5000) {
    rupee -= 5000
    document.getElementById('rupeeCount').innerText = rupee
    document.getElementById('rbtn-5').removeAttribute('disabled')
    document.getElementById('r-4').setAttribute('hidden', true)
  } else {
    window.alert("You're Too Poor")
  }
}


// SECTION Interactive Rupees
function doClick1() {
  rupee += 1
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function doClick2() {
  rupee += 5
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function doClick3() {
  rupee += 20
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function doClick4() {
  rupee += 50
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function doClick5() {
  rupee += 100
  // @ts-ignore
  document.getElementById('rupeeCount').innerText = rupee
}


function teacherCheats() {
  window.alert("Grading Mode Enabled + 10,000 Rupee's")
  rupee = 10000
  document.getElementById('rupeeCount').innerText = rupee
}


function drawAlert() {
  window.alert("If you are grading type teacherCheats() in console for cheats")
}


// SECTION This displays the Rupee Count at all times
// @ts-ignore
document.getElementById('rupeeCount').innerText = rupee



// NOTE Deprecated old Array
// const rupees = [
//   {
//     name: 'blue_rupee',
//     modifier: 5,
//     bought: false,
//     upgradePrice: 50
//   },
//   {
//     name: 'red_rupee',
//     modifier: 20,
//     bought: false,
//     upgradePrice: 200
//   },
//   {
//     name: 'silver_rupee',
//     modifier: 50,
//     bought: false,
//     upgradePrice: 400
//   },
//   {
//     name: 'gold_rupee',
//     modifier: 100,
//     bought: false,
//     upgradePrice: 800
//   }
// ]