let salaries  = {
  John: 100,
  Ann: 160,
  Peter: 130
}

let accumulator = 0; for(let key in salaries) {accumulator += salaries[key];}console.log(accumulator);