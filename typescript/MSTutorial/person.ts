class Person {
@memoize
    get name() { return `${this.first} ${this.last}` }

    set name(val) {
        let [first, last] = val.split(' ');
        this.first = first;
        this.last = last;
    }
}