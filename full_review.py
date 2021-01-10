from bs4 import BeautifulSoup
import requests
import re
import urllib.request
import time

#uncoment this block if you save html pages in local storage
#url = "E:/vitki/par/ht.html"
#page = open(url)
#soup = BeautifulSoup(page.read(), "html.parser")

#create file "list_links" and place lins for parcing
linkfile = open("list_links", "r")
links = set ()
for line in linkfile:
        links.add(line.strip())
linkfile.close()


for link in links:
    #parcing block
    try:
        url =link
        print(url)
        headers = {'User-Agent': 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'}
        soup = BeautifulSoup(requests.get(url, headers=headers).content, "html.parser")
        x = soup.find("div", {"class": "review-body description"})
        x = x.get_text()
        print(x)

        #writing results in "rev" file
        filereview = open('rev', 'a')
        filereview.write(x)
        filereview.write('\n')
        filereview.close()
        time.sleep(25)

    #if error (you need to change proxy)    
    except:
        print("error")
        time.sleep(7)
