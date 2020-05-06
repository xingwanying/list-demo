# list-demo

## Description

This is a simpale album which show the foxs' pictures. The mock api provided 50 pictures in total, which  divided into ten pages.

Test environment:  Chrome  v81.0.4044.129, iphone 8 view

## /index

 After initing project, open the url "http://localhost:8080/" or "http://localhost:8080/index" and the home page is as follow: 

![home](https://s1.ax1x.com/2020/05/06/YAa31s.png)

Click Start go to the list page.

## /list

This page initializes the loading of five pictures. Each time the scroll bar slides to the bottom will trigger request to load another five pictures.
![list](https://s1.ax1x.com/2020/05/06/YAwJoT.png)
Click the star icon on the lower right corner of each picture to mark the photo. Marked pictures will appear at the top of the list and still stays after refreshing the page.
![mark](https://s1.ax1x.com/2020/05/06/YAwTTf.png)
Click the icon on the upper left corner of the marked picture to cancel the mark.
![marked](https://s1.ax1x.com/2020/05/06/YA08cd.png)
Click the back icon on the header to return to the home page.
![back](https://s1.ax1x.com/2020/05/06/YA0ov9.png)

## Testing

Based on nigthwatch and Chrome. The result is as follow:

![test](https://s1.ax1x.com/2020/05/06/YA0x8e.png)
![test](https://s1.ax1x.com/2020/05/06/YABSvd.png)
