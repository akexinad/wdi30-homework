// Warmup - Serge Says
// Examples
// Serge answers 'Sure.' if you ask him a question.
const sergeSays = function(input){
  if (!input)
  return "Fine! Be that way!";
  }
  if (input.endsWith("?")) {
  return "Sure."
  }
} else if (input === input.toUpperCase()) {
return "Woah, Chill out!";
}
return "Whatever"

sergeSays('test?')
//
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.
