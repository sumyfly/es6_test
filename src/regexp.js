// Regexp
// test exec compile
const re = /(\d+)\.(\d+)\.(\d+)\.(\d+)/g //g必须要，不然exec不会遍历
const s = '192.168.10.111'
const result = re.exec(s) //["192.168.10.111", "192", "168", "10", "111", index: 0, input: "192.168.10.111"]
console.warn(result)

// string
// search replace match