Drupal.behaviors.tabs={attach:function(t){function e(t,e){t.addEventListener("click",(function(t){t.preventDefault(),function(t){t!==l&&0<=t&&t<=a.length&&(a[+l].classList.remove("is-active"),a[+t].classList.add("is-active"),i[+l].classList.remove("is-active"),i[+t].classList.add("is-active"),l=t)}(e)}))}for(var s=t.querySelectorAll(".tabs"),a=t.querySelectorAll(".tabs__link"),i=t.querySelectorAll(".tabs__tab"),l=0,c=0;c<s.length;c+=1)s[+c].classList.remove("no-js");for(var r=0;r<a.length;r+=1)e(a[+r],r)}};