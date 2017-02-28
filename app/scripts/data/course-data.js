/*globals constants & requester*/
'use strict';

let courseData = {
  getCourseById: function (id) {
    //TODO Change
    return requester.getJSON(constants.serverUrl + 'courses/course/' + id);
    //Promise.resolve('reached course data' + ' ' + id);
  },
  getCourseHomework: function (id) {
    //TODO Change
    return Promise.resolve('reached course homework' + id);
  }
};
