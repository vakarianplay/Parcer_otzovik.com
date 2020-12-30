from bs4 import BeautifulSoup
import requests
import re
import urllib.request
import time

#headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'}


#url = "E:/vitki/par/ht.html"
#page = open(url)
#soup = BeautifulSoup(page.read(), "html.parser")

linkfile = open("ssilki", "r")
links = set ()
for line in linkfile:
        links.add(line.strip())
linkfile.close()




for link in links:

    #url = '"'+link+'"'
    #print(url)

    try:
        url =link
        print(url)
        headers = {'User-Agent': 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'}
        soup = BeautifulSoup(requests.get(url, headers=headers).content, "html.parser")
        #soup = BeautifulSoup(open("E:/vitki/par/ht.html").content, "html.parser")
        ##soup = BeautifulSoup(page.read())
        #x = soup.find("div", id="review-body description").find("table").find_all("p")[8]
        x = soup.find("div", {"class": "review-body description"})
        x = x.get_text()
        print(x)

        filereview = open('rev', 'a')
        filereview.write(x)
        filereview.write('\n')
        filereview.close()
        time.sleep(25)

    except:
        print("error")
        time.sleep(7)
