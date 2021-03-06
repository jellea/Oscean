'use strict'

function Entry (name, data) {
  this.name = name
  this.data = data
  this.unde = 'Home'
  this.bref = `—`
  this.indexes = [this.name]
  this.outgoing = [] // From Ø('map')
  this.incoming = [] // From Ø('map')

  this.span = { from: null, to: null }
  this.issues = []
  this.logs = []
  this.diaries = []
  this.tags = []

  this.glyph = function () {
    return null
  }

  this.portal = function () {
    return null
  }

  this.has_tag = function () {
    return false
  }

  this.body = function () {
    return `Unformatted Entry: ${name}`
  }

  this.indexes = function () {
    return [this.name]
  }

  this.toString = function () {
    return `<div class='error'>${this.body()}</div>`
  }
}
