// Quoting Strings with Single Quotes

var myStr1 = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

// As shown above we'd have to put the reverse back slashes in if there was multiple quotations

// However if you change the outer double quotes to single quotes, we dont need the reverse back slashes

var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

// Another way you can use both single and double quotes in the same string is if you use back ticks at the beginning and end

var myStr3 = `<a href='http://www.example.com' target="_blank">Link</a>`;

console.log(myStr1)
console.log(myStr2)
console.log(myStr3)