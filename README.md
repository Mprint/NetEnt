
# Introduction
This project demonstrates how to use CodeceptJS with Webdriver and REST helper.

## How to use
This is done using CodeceptJS <https://codecept.io/>

### Tech
This test uses a number of open source projects to work properly:

*<https://nodejs.org/en/> - evented I/O for the backend
*<https://codecept.io/> - CodeceptJS
*<https://reqres.in/> - Endpoints that are used in this porject

### Installation
This requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
cd NetEnt
npm i
```

### How to trigger API tests
To run all api tests just simply type

```sh
npm test
```

Example output
```sh
CodeceptJS v2.4.3

GET tests --
  ✔ Verify a successful call in 8ms
  ✖ Verify a not found call in 408ms
  ✔ Verify a successful outcome file in 3ms
  ✔ Verify a successful call to images in 5ms
  ✔ Verify a successful call to images in 4ms
  ✖ Verify no Win result in 5521ms
  ✖ Verify small Win result in 5499ms
  ✖ Verify big Win result in 5480ms
check CSS styles on the Welcome page --
  ✔ See background images link on the Welcome page in 2086ms
  ✔ See visible elements on the Welcome page in 148ms
  ✔ Check spin class after click on the start in 2126ms
  ✔ Check change status text after start in 91ms
  ✖ Check alternative start - Enter key  in 1494ms
```
