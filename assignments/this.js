/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: this references the window object when no explicit reference is defined.
* 2. Implicit: this references an object that is being called inside of the window object.
* 3. New: This refers to the constructor object that is created as a new instance of that object.
* 4. Explicit: this refers to what it is explicitly bound to through the use of call, apply, or bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greeting(){
    console.log(this);
}


// Principle 2

// code example for Implicit Binding
const greeting2 = {
    name: 'Alam',
    email: 'alam@gmail.com',
    HiAlam() {
      return `${this.name}, ${this.email}`;
    },
};

// Principle 3

// code example for New Binding
function GreetingSomeone(firstName, lastName, hobby) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hobby = hobby;
}

// Principle 4

// code example for Explicit Binding
function Parent(attribute) {
    this.firstName = attribute.firstName;
    this.lastName = attribute.lastName;
    this.hobby = attribute.hobby;
}
  
function Child(childAttribute) {
    Parent.call(this, childAttribute);
}