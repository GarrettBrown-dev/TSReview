import * as readline from 'readline';

function MathChallenge(num: number) { 
  let sqRoot = Math.sqrt(num);
  if(num === sqRoot * sqRoot) {
      return "true";
    } else {
      return "false";
    }
  }

  console.log(MathChallenge(