"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("prod", function() {
    runSequence(
        "clean",
        [
            "sass",
            "jsmin",
            "copy:html",
            "copy:lib",
            "copy:resources"
        ]/*,
        "sassdoc"*/
    )
});