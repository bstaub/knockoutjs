/**
 * Created by bstaub on 28.12.13.
 */

$("input#firstName").attr("data-bind","value: firstName");
$("span#firstName").attr("data-bind","text: firstName");
$("input#lastName").attr("data-bind","value: lastName");
$("span#lastName").attr("data-bind","text: lastName");
$("span#fullName").attr("data-bind","text: fullName");