import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness, word1, word2) {
    var output: Task[] = [];
    console.log(desiredCompleteness);
    console.log(word1);
    console.log(word2);

//     console.log(desiredCompleteness);
//
switch(desiredCompleteness){

    case "work":
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "work") {
          output.push(input[i]);
        }
      }
      return output;


    case "home":
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "home") {
          output.push(input[i]);
        }
      }
      return output;


     case "hobbies":
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "hobbies") {
          output.push(input[i]);
       }
       }
     return output;


  default: return input
}
}
}
