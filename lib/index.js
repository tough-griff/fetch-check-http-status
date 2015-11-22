"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkStatus;
function checkStatus(response) {
  var status = response.status;
  var statusText = response.statusText;

  if (status >= 200 && status < 300) return response;

  var error = new Error(statusText);
  error.response = response;
  return error;
}