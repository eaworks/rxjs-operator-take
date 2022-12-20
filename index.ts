import { of, take } from 'rxjs';

// take de skip in tersine verilen deger neyse o kadar deger alir
const source = of(1, 2, 3, 4, 5);
const example = source.pipe(take(2));
example.subscribe((val) => console.log(val));
// source.pipe(take(2)).subscribe((val) => console.log(val));
