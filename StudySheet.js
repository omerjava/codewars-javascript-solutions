// StudySheet

let k= "563000655734469485".match(new RegExp('.{' + 3 + '}', 'g'));
console.log(k);

let s="23465"
let rotate  = s => s.slice(1) + s.slice(0, 1);
console.log(rotate(s));
