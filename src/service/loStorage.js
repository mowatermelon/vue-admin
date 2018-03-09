'use strict'

function setItem (name, value) {
  localStorage.setItem(name, value)
}

function getItem (name, type) {
  let res = localStorage.getItem(name)
  if (res !== null) {
    if (!type) { // 为布尔值
      res = JSON.parse(res)
    }
  }
  return res
}

function initData (init) {
  for (let i = 0; i < init.length; i++) {
    if (localStorage.getItem(init[i].name) === null) {
      setItem(init[i].name, init[i].value)
    }
  }
}

export default {initData, setItem, getItem}
