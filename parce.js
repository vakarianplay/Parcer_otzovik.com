javascript:(function(){var fullRating = document.querySelectorAll('.product-header-rating-row')[0].querySelectorAll('.product-rating')[0].getAttribute('title').replace('%D0%9E%D0%B1%D1%89%D0%B8%D0%B9 %D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3: ',''); var company = document.querySelectorAll('.breadcrumbs')[0].querySelectorAll('.brand')[0].innerText;
var commonPercent = document.querySelectorAll('.product-header-rating-row')[0].querySelectorAll('.recommend-ratio > span')[0].innerText.replace('%','');
var output = "";
document.querySelectorAll('.review-list-chunk > .item').forEach(function(item){ var title = item.querySelectorAll('.review-title')[0].innerText;
var link = item.querySelectorAll('.review-title')[0].href;
var date = item.querySelectorAll('.review-postdate>span')[0].innerText;
var date = item.querySelectorAll('.review-postdate>span')[0].innerText;
var desc = item.querySelectorAll('.review-teaser')[0].innerText;
var plus = item.querySelectorAll('.review-plus')[0].innerText;
var minus = item.querySelectorAll('.review-minus')[0].innerText;
var comments = item.querySelectorAll('.review-comments')[0].getAttribute('title').replace('%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8 %D0%BA %D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%83: ','');
var likes = item.querySelectorAll('.review-yes')[0].getAttribute('title').replace('%D0%9E%D1%82%D0%B7%D1%8B%D0%B2 %D0%BF%D0%BE%D0%BD%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%81%D1%8F ', '').replace(' %D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC', '').replace(' %D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8E', '');
var rat = item.querySelectorAll('.product-rating')[0].getAttribute('title').replace('%D0%9E%D0%B1%D1%89%D0%B8%D0%B9 %D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3: ', '');
output = output + date+'\t'+company+'\t'+commonPercent+'\t'+fullRating+'\t'+title+'\t'+plus+'\t'+minus+'\t'+desc+'\t'+rat+'\t'+likes+'\t'+comments+'\t'+link+'\n'; });
var div = document.createElement('DIV');
div.setAttribute("id", "theWindowParser");
div.style.cssText = 'position: fixed; top: 0px;
z-index: 77777; background: #ccc; width: 100%;
box-shadow: black 1px 1px 3px 1px;';                      
div.innerHTML = '<div><div><span style="cursor:pointer;
color:red;
margin: 5px 15px 5px 5px;
float:right;
"onclick="var win = document.querySelectorAll(\'#theWindowParser\')[0];
  win.parentElement.removeChild(win)">X</span>
    </div>
      <div style="clear:both;"></div>
        <div style="margin:15px;">
          <textarea style="width:100%; height:300px; margin:-5px;" id="theOutputText">'+output+'</textarea>
        </div>
          </div>';
document.getElementsByTagName('body')[0].appendChild(div);
document.querySelectorAll('#theOutputText')[0].select();
document.execCommand('copy'); })();
void(0);
